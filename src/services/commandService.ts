import { Message } from 'discord.js';

import Command from "../enums/commands";
import {
  desvantagens,
  ping,
  detalhesDesvantagem,
  detalhesVantagem,
  pericias,
  sobre,
  vantagens,
  rollDice,
  comandos,
} from "../commands";

class CommandService {
  public run(command: string | undefined, args: Array<string>, message: Message) {
    if (command === Command.PING) {
      return ping(message);
    }

    if (command === Command.DESVANTAGENS) {
      return desvantagens(message);
    }

    if (command === Command.DESVANTAGEM) {
      return detalhesDesvantagem(message, args);
    }

    if (command === Command.VANTAGEM) {
      return detalhesVantagem(message, args);
    }

    if (command === Command.PERICIAS) {
      return pericias(message);
    }

    if (command === Command.ABOUT) {
      return sobre(message, args);
    }

    if (command === Command.VANTAGENS) {
      return vantagens(message);
    }

    if (command?.match(/^\d/)) { // check if it starts with a number
      return rollDice(message, command);
    }

    if (command === Command.COMMANDS) {
      return comandos(message);
    }
  }
}

export default CommandService;
