import { Message } from 'discord.js';

import { pericias as periciasFile } from "../data";

const pericias = async (message: Message) => {
  const periciasMap = periciasFile.listaDePericias.map((data) => {
    return `• ${data.name}`
  });
  const a = 'Digite !pericia + (nome da pericia) para'
    + ' visualizar os detalhes';
  const b = 'Exemplo !pericia crime';

  message.reply(`${a}\n${b}\n\n${periciasMap.join('\n')}`);
};

export default pericias;
