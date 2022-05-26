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

import sendMessage from '../utils/sendMessage';

class CommandService {
  public run(command: string | undefined, args: Array<string>, message: Message, prefix: string) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (command === Command.PING) {
      const res = ping(message);
      return sendMessage(message, res.message)
    }

    if (command === Command.DESVANTAGENS) {
      const res = desvantagens();
      return sendMessage(message, res.message);
    }

    if (command === Command.DESVANTAGEM) {
      const res = detalhesDesvantagem(args);
      return sendMessage(message, res.message);
    }

    if (command === Command.VANTAGEM) {
      const res = detalhesVantagem(args);
      return sendMessage(message, res.message);
    }

    if (command === Command.PERICIAS) {
      const res = pericias();
      return sendMessage(message, res.message);
    }

    if (command === Command.ABOUT) {
      const res = sobre(args);
      return sendMessage(message, res.message);
    }

    if (command === Command.VANTAGENS) {
      const res = vantagens();
      return sendMessage(message, res.message);
    }

    if (command?.match(/^\d/)) { // check if starts with a number
      const res = rollDice(command);
      return sendMessage(message, res.message);
    }

    if (command === Command.COMMANDS) {
      const res = comandos();
      return sendMessage(message, res.message);
    }
  }
}

export default CommandService;
