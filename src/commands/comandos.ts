import { Message } from 'discord.js';

import { commands } from '../data';

const comandos = (message: Message) => {
  const commandsMap = commands.map((data) => {
    const { command, description } = data;

    return `• ${command} - ${description}`;
  });

  message.reply(`Lista de comandos:\n\n${commandsMap.join('\n')}`);
};

export default comandos;
