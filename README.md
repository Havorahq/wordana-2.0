# Wordana - Web Application Game

#### Link to Wordana Game: (https://wordana.vercel.app)
#### Video presentation Link: (https://youtu.be/3-yLP3fqsc8)
#### Smart contract repo: (https://github.com/Havorahq/wordana-smart-contract)
#### Verified main smart contract on blockscout: (https://pegasus.lightlink.io/address/0x860ae36B8F6eEE7FEc5Fe15febEE9FD936f36303)
#### Verified WRD token smart contract on blockscout: (https://pegasus.lightlink.io/token/0x34eb0F4a039532C584647962A041D841094e20B9?tab=contract)


## Overview

Wordana is a wordle game that is built on the Lightlink blockchain network. The game makes use of the API 3 Quantum Random Number Generator protocol to whip up a collection of random words. Players then take their shot at guessing these words within a specified number of attempts. The best part? Thanks to Lightlink's gasless technology seamlessly integrated into Wordana, you get to experience all the wordle fun without the hassle of gas fees.

### The Problem 

Many gamers and game developers avoid blockchain-based games due to high gas fees. You cannot really blame them. Paying real money for each gaming transaction is a real buzzkill.

### Visualisation of the Solution

Imagine having endless gaming sessions, maybe even sharing the fun with friends from afar. What if you could compete with friends across the miles, all on the blockchain, and guess what? No need to worry about those pesky gas fees. That's where Wordana comes in, seamlessly integrating Lightlink's gasless technology to make all this gaming magic a reality.

### The Strategy 

We leveraged the Enterprise Mode of the Lightlink blockchain technology and the API 3 QRNG to create an addictive wordle game called Wordana. 

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building web applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [BigNumber.js](https://github.com/MikeMcl/bignumber.js/): Handles large blockchain-related numbers with ease and precision.
- [rainbow-me/rainbowkit](https://github.com/rainbow-me/rainbowkit): Simplifies integration with popular wallets like MetaMask, Rainbow, and WalletConnect.
- [wagmi](https://github.com/example/wagmi): Offers a clean and abstracted API for interacting with smart contracts.
- [ethers.js](https://docs.ethers.io/v5/): Used for specific low-level interactions with the Ethereum blockchain.
- [API3 QRNG](https://api3.org/qrng/): Random number generator that provides dapps with truly random numbers based on quantum mechanics.
- [lightlink](https://www.lightlink.io/): Gasless blockchain network for enterprises and dapps.

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14+)
- npm 

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/example/wordana.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

    
3. Start development server:

    ```bash
    npm run dev
    ```

  
## Deployment

The application can be deployed to Vercel or Netlify using their respective deployment commands. Refer to their documentation for specific instructions.

## Contributing

We welcome contributions! Please ensure your code adheres to our style guide and submit pull requests for review.

## Game Flow

### Home Page

### Connect your wallet
- Start by connecting your wallet; Wordana plays nice with all crypto wallets.
  
<img width="1437" alt="Screenshot 2024-02-02 at 8 57 01 PM" src="https://github.com/Havorahq/wordana/assets/36278808/ef839337-b0cc-4514-84da-61ac736f3ede">
    
    
### Click on "Start Playing"
- After linking your wallet, just give the "start playing" button a tap, and you're off to the game menu. From there, simply choose your play mode – for now, let's go with Single Player. 
  
![Home Page](/public/images/home_page.png)

### Single Player Mode

![Game Mode](/public/images/game_mode.png)


- Now, you've got choices. You can either dive into a new game to earn some WRD tokens or test the waters by playing the word of the day to get the hang of things. It's all up to you. Let’s start a new game.

![Single Player Mode](/public/images/single_player.png)

  
 
- Here's the rules of the game and how it works. Always handy for first time players. All you need to do at this point is to initialise the game.
- Hints provided: Green tile (correct letter and place), Yellow tile (correct letter but wrong place), White tile (incorrect letter).

![Game Hints](/public/images/game_hints.png)


- Once you approve the transaction, the game is all yours. Take your shot at guessing the word in 5 tries and claim your WRD token reward when you win.
<img width="1440" alt="game_interface" src="https://github.com/Havorahq/wordana/assets/36278808/c51c5df5-293b-41cf-a426-ab24ad0af86e">


###  Game Play

<img width="1440" alt="game_play" src="https://github.com/Havorahq/wordana/assets/36278808/aaeee462-1ec5-4e19-9508-bfb427e09697">


- This is how it looks like when you guess the word correctly.
 
<img width="1438" alt="Screenshot 2024-02-01 at 10 18 08 PM" src="https://github.com/Havorahq/wordana/assets/36278808/b9c1a64d-2d8b-4cf9-ba42-f6fe4137e8c3">


- This is how it looks like when you win. You can claim your reward afterward

<img width="1440" alt="you_won" src="https://github.com/Havorahq/wordana/assets/36278808/c882ed80-c9dc-4c52-9109-3dfeb1dc3035">


- This is how it looks like when you lose. You can replay but you get to predict another random word provided by the API 3 QNRG 

<img width="1440" alt="you_lost" src="https://github.com/Havorahq/wordana/assets/36278808/55f852e5-e01c-4a53-8d66-b652cfda423e">


## Multiplayer Mode 
- The multiplayer works just like the single-player mode. The difference is that you get to share the fun with someone else.
- Start by topping up your staking balance. This is simply increasing your spending cap. 

#### - Invite player

![Screenshot 2024-02-02 at 8 51 41 PM](https://github.com/Havorahq/wordana/assets/36278808/edf687d7-685d-4c6c-b5d5-1024a6be2ac7)



#### Input the wallet of your chosen player and the amount you wish to stake

![Multiplayer Mode - Invite](/public/images/multi_player.png)


#### Join game

<img width="1440" alt="Screenshot 2024-02-02 at 8 52 17 PM" src="https://github.com/Havorahq/wordana/assets/36278808/a62ccc82-3423-4e61-9b0c-dd69b3ca2c95">


#### Input your opponent's wallet Address
![Multiplayer Mode - Join Game](/public/images/join_game.png)


- Both players start the game together.
- Once the other player accepts your invite, it's game on, and the ultimate winner grabs it all.

![Multiplayer Mode - Game Play](/public/images/multi_game_play.png)

#### Player Wait


<img width="1440" alt="opp_wait" src="https://github.com/Havorahq/wordana/assets/36278808/a7485357-a92e-43ec-86db-87bce260ce27">



#### The first to guess the right word wins the staked token.

<img width="1440" alt="multi_win" src="https://github.com/Havorahq/wordana/assets/36278808/3eda752f-9798-4a3d-8a6a-46854904c547">



#### If no one guesses the right word, there is no winner.



## Results from scanning the main smart contract and token smart contract

![image](https://github.com/Havorahq/wordana/assets/36278808/95d14bff-475d-4506-99db-354810a65c73)


## License

This project is licensed under the [MIT License](LICENSE).
