import { commands } from '../data';
import IResponse from '../interfaces/response';

const comandos = (): IResponse => {
  const commandsMap = commands.map((data) => {
    const { command, description } = data;

    return `• ${command} - ${description}`;
  });

  return { message: `Lista de comandos:\n\n${commandsMap.join('\n')}` };
};

export default comandos;
