import { Message } from 'discord.js';

import { desvantagens as desvantagensFile } from '../data';

const desvantagens = async (message: Message) => {
  const desvantagensMap = desvantagensFile.desvantagens.map((data) => {
    const { name, cost } = data;

    return `• ${name}(${cost})`;
  });

  const a = 'Digite !desvantagem + (nome da desvantagem) para'
    + ' visualizar os detalhes';
  const b = 'Exemplo !desvantagem monstruoso';

  message.reply(`${a}\n${b}\n\n${desvantagensMap.join('\n')}`);
};

export default desvantagens;
