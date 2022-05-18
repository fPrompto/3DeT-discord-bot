import { Message } from 'discord.js';


import Command from "../enums/Commands";
import { ping } from "../commands";

class CommandService {
  public run(command: string, args: Array<string>, message: Message) {
    if (command === Command.PING) {
      return ping(message);
    }
  }
}

export default CommandService;
