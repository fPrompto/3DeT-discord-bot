import { Message } from 'discord.js';
import { desvantagens as desvantagensFile } from "../data";

const detalhesDesvantagem = async (message: Message, args: Array<string>) => {
  const filterArgs = args.join(' ');

  const vFind = desvantagensFile.desvantagens.find((v) => {
    const vName = v.name.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const vArgs = filterArgs.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "").toLowerCase();

    return vName.includes(vArgs);
  });

  if (!vFind) {
    return message.reply('`Não foi possível localizar essa Vantagem!');
  }

  const messageToReply = `• ${vFind.name}(${vFind.cost})\n\n${vFind.description})`;

  message.reply(`${messageToReply}`);
};

export default detalhesDesvantagem;
