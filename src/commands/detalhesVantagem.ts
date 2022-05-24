import { Message } from 'discord.js';

import { vantagens } from "../data";
import Messages from '../enums/messages';

import normalizeString from '../utils/normalizeString';

const detalhesVantagem = async (message: Message, args: Array<string>) => {
  const filterArgs = args.join(' ');

  const vFind = vantagens.vantagens.find((v) => {
    const vName = normalizeString(v.name);
    const vArgs = normalizeString(filterArgs);

    return vName.includes(vArgs);
  });

  if (!vFind) {
    return message.reply(Messages.VANTAGEM_ERROR);
  }
  const messageToReply = `• ${vFind.name}(${vFind.cost})\n\n${vFind.description})`;

  message.reply(`${messageToReply}`);
};

export default detalhesVantagem;
