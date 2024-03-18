// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view, UnorderedMap, AccountId } from 'near-sdk-js';
import { GameInstance } from './types';
import { assert } from './utils';
import words from './words';

@NearBindgen({})
class WordanaMain {

    gameInstances: UnorderedMap<GameInstance> = new UnorderedMap<GameInstance>('games');


    @call({}) // This method changes the state, for which it cost gas
    create_game_instance({ player2Id, entryPrice }: { player2Id: AccountId, entryPrice: number }): GameInstance {
        const player1Id = near.predecessorAccountId();

        assert(player1Id !== player2Id, 'You cannot invite yourself to a game')

        // select word to guess
        const randomNumbers: Uint8Array = near.randomSeed();
        const wordToGuess:string = words[randomNumbers[0]]

        const newGameInstance: GameInstance = {
            player1Id,
            player2Id,
            entryPrice,
            winner: null,
            player1Done: false,
            player2Done: false,
            isDraw: false,
            prizeCollected: false,
            status: 'pending',
            wordToGuess,
            player2HasEntered: false
        };

        this.stake_coins()
        this.gameInstances.set(player1Id, newGameInstance);
        // stake function
        near.log(`new game instance created ${player2Id}`);

        return newGameInstance
    }

    @call({})
    enter_game(player1Id: AccountId): GameInstance {
        const gameToEnter: GameInstance = this.gameInstances.get(player1Id)
        
        if (gameToEnter.status !== 'concluded'){
            if (gameToEnter.player2Id === near.predecessorAccountId()){
                this.stake_coins()
                gameToEnter.status = 'in progress';
                gameToEnter.player2HasEntered = true
                this.gameInstances.set(player1Id, gameToEnter);
            } else{
                throw new Error('You were not invited to this game')
            }
        } else{
            throw new Error('This game has been concluded')
        }
        near.log(`Player 2 has entered the game`)
        return gameToEnter
    }

    @call ({privateFunction: true})
    stake_coins(): void {
        near.log("coins staked")
    }

    @call ({})
    record_game({player1Id, guessIndex}:{player1Id: AccountId, guessIndex: number}): void {
        const currentGameInstance: GameInstance = this.gameInstances.get(player1Id)
        assert(currentGameInstance.status === 'in progress', 'This game is no longer in progress');

        const callingId: AccountId = near.predecessorAccountId();
        if (callingId !== currentGameInstance.player1Id){
            assert(callingId === currentGameInstance.player2Id, 'You are not a participant in this game');
            currentGameInstance.player2GuessIndex = guessIndex;
            currentGameInstance.player2Done = true;
            this.gameInstances.set(player1Id, currentGameInstance);
            if (currentGameInstance.player1Done){
                // conclude the game because both players are done
                this.conclude_game({player1Id});
            }
        } else{
            currentGameInstance.player1GuessIndex = guessIndex;
            currentGameInstance.player1Done = true;
            this.gameInstances.set(player1Id, currentGameInstance);
            if (currentGameInstance.player2Done){
                // conclude the game because both players are done
                this.conclude_game({player1Id});
            }
        }
    }

    @call ({})
    conclude_game({player1Id}:{player1Id: AccountId}): void{
        const gameInstance: GameInstance = this.gameInstances.get(player1Id);
        gameInstance.status = 'concluded';
        if (gameInstance.player1GuessIndex < gameInstance.player2GuessIndex){
            gameInstance.winner = gameInstance.player1Id;
            near.log(`Game won by player 1 ${gameInstance.player1Id}`);
        } else if  (gameInstance.player1GuessIndex > gameInstance.player2GuessIndex){
            gameInstance.winner = gameInstance.player2Id
            near.log(`Game won by player 2 ${gameInstance.player2Id}`);
        } else{
            gameInstance.isDraw = true;
            near.log('Game drawn')
        }
    }

    @view ({})
    get_game_instance({player1Id}:{player1Id: AccountId}): GameInstance{
        near.log('reading the game instances')
        return this.gameInstances.get(player1Id)
    }

    // winner claim reward function
    // refund for draw function
}