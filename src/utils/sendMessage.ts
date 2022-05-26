import { Message } from 'discord.js';

const sendMessage = (message: Message, str: string) => {
  return message.reply(str);
};

export default sendMessage;
