import { Message } from 'discord.js';

const sendMessage = (message: Message, str: string) => {
  const CHAR_LIMIT: number = 2000;

  if (str.length > CHAR_LIMIT) {
    for (let i = 0; i < str.length; i += CHAR_LIMIT) {
      const newStr = str.slice(i, i + CHAR_LIMIT);
  
      message.reply(newStr);
    }

    return;
  }

  return message.reply(str);
};

export default sendMessage;
