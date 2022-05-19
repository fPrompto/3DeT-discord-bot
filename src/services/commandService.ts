import { Message } from 'discord.js';

import Command from "../enums/commands";
import {
  desvantagens,
  ping,
  detalhesDesvantagem,
} from "../commands";

class CommandService {
  public run(command: string, args: Array<string>, message: Message) {
    if (command === Command.PING) {
      return ping(message);
    }

    if (command === Command.DESVANTAGENS) {
      return desvantagens(message);
    }

    if (command === Command.DESVANTAGEM) {
      return detalhesDesvantagem(message, args);
    }
  }
}

export default CommandService;
