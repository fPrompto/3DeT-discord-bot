import { Message } from 'discord.js';

import {
  vantagens as vantagensFile,
  vantagensUnicas as vantagensUnicasFile,
  pericias as periciasFile,
} from '../data';


const vantagens = (message: Message) => {
  const { name, about } = vantagensFile;

  message.reply(`• ${name}\n\n${about}`)
};

const pericias = (message: Message) => {
  const { name, about } = vantagensUnicasFile;

  message.reply(`• ${name}\n\n${about}`);
};

const vantagensUnicas = (message: Message) => {
  const { name, about } = periciasFile;

  message.reply(`• ${name}\n\n${about}`);
};

const sobre = (message: Message, args: Array<string>) => {
  if (args.join(' ') === 'vantagens unicas') {
    return vantagensUnicas(message);
  }

  if (args[0] === 'vantagens' || args[0] === 'vantagem') {
    return vantagens(message);
  }

  if (args[0] === 'pericias' || args[0] === 'pericia') {
    return pericias(message);
  }

  return message.reply(`No foi possvel localizar`);
};

export default sobre;
