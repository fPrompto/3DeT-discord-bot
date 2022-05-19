import { Message } from 'discord.js';

import { vantagens as vantagensFile } from '../data';

const vantagens = async (message: Message) => {
  const vantagensMap = vantagensFile.vantagens.map((data) => {
    const { name, cost } = data;

    return `• ${name}(${cost})`;
  });
  const a = 'Digite !vantagem + (nome da vantagem) para'
    + ' visualizar os detalhes';
  const b = 'Exemplo !vantagem xama';

  message.reply(`${a}\n${b}\n\n${vantagensMap.join('\n')}`);
};

export default vantagens;
