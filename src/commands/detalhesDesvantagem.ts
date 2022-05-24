import { Message } from 'discord.js';
import { desvantagens as desvantagensFile } from "../data";

import normalizeString from '../utils/normalizeString';
import Messages from '../enums/messages';

const detalhesDesvantagem = async (message: Message, args: Array<string>) => {
  const filterArgs = args.join(' ');

  const vFind = desvantagensFile.desvantagens.find((v) => {
    const vName = normalizeString(v.name);
    const vArgs = normalizeString(filterArgs);

    return vName.includes(vArgs);
  });

  if (!vFind) {
    return message.reply(Messages.DESVANTAGEM_ERROR);
  }

  const messageToReply = `• ${vFind.name}(${vFind.cost})\n\n${vFind.description})`;

  message.reply(`${messageToReply}`);
};

export default detalhesDesvantagem;
