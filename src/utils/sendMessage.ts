import { Message } from 'discord.js';

const sendMessage = (message: Message, str: string) => {
  if (str.length > 2000) {
    const str1 = str.slice(1, 2000);
    const str2 = str.slice(2000);
    message.reply(str1);
    message.reply(str2);
    return;
  }
  return message.reply(str);
};

export default sendMessage;
