/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

import { utils } from 'near-api-js';

export class WordanaInt {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse
  }

  async getWordForSinglePlayer() {
    console.log(this.wallet, 'old wallet')
    const word = await this.wallet.viewMethod({ 
      contractId: this.contractId, 
      method: "get_word_for_single_player" ,
      args: { appkey: 'hello' },
    })
    console.log(word, 'the word')
    return word
  }

  async addMessage(message, donation) {
    const deposit = utils.format.parseNearAmount(donation);
    return await this.wallet.callMethod({ contractId: this.contractId, method: "add_message", args: { text: message }, deposit });
  }

  async singlePlayerClaimReward() {
    return await this.wallet.callMethod({ 
      contractId: this.contractId, 
      method: "singleplayer_claim_reward", 
    });
  }

  async createGameInstance(player2Id, entryPrice) {
    const deposit = utils.format.parseNearAmount(entryPrice);
    return await this.wallet.callMethod({ 
      contractId: this.contractId, 
      method: "create_game_instance", 
      args: { 
        player2Id,
        entryPrice
      },
      deposit
    });
  }

}