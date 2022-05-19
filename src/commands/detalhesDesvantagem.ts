import { Message } from 'discord.js';
import { desvantagens as desvantagensFile } from "../data";

const detalhesDesvantagem = async (message: Message, args: Array<string>) => {
  try {
    const filterArgs = args.join(' ');

    const vFind = desvantagensFile.desvantagens.find((v) => {
      const vName = v.name.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "").toLowerCase();

      const vArgs = filterArgs.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "").toLowerCase();

      return vName.includes(vArgs);
    });

    const { name, cost, description } = vFind;
    const messageToReply = `• ${name}(${cost})\n\n${description})`;

    message.reply(`${messageToReply}`);

  } catch (_err) {
    message.reply(`Não foi possível localizar essa Vantagem!`);
  }
};

export default detalhesDesvantagem;
