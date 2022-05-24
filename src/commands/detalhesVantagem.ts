import { Message } from 'discord.js';

import { vantagens } from "../data";
import Error from '../enums/errors';

const detalhesVantagem = async (message: Message, args: Array<string>) => {
  const filterArgs = args.join(' ');

  const vFind = vantagens.vantagens.find((v) => {
    const vName = v.name.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const vArgs = filterArgs.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "").toLowerCase();

    return vName.includes(vArgs);
  });

  if (!vFind) {
    return message.reply(Error.VANTAGEM);

  }
  const messageToReply = `• ${vFind.name}(${vFind.cost})\n\n${vFind.description})`;

  message.reply(`${messageToReply}`);
};

export default detalhesVantagem;
