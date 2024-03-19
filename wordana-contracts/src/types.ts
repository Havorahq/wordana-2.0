import { AccountId } from "near-sdk-js"

export type GameInstance = {
    player1Id: AccountId,
    player2Id: AccountId,
    entryPrice: bigint,
    winner: string | null,
    player1Done: boolean,
    player2Done: boolean,
    isDraw: boolean,
    prizeCollected: boolean,
    status: string,
    wordToGuess: string,
    player1GuessIndex?: number,
    player2GuessIndex?: number,
    player2HasEntered: boolean,
    rewardCollected: boolean
}