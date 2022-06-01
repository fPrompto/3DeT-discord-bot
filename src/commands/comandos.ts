import { readFile } from '../utils/readWriteFile';
import IResponse from '../interfaces/response';

const comandos = async (): Promise<IResponse> => {
  const commands = await readFile('src/data/commands.json');

  const commandsMap = commands.map((data: any) => {
    const { command, description } = data;

    return `• ${command} - ${description}`;
  });

  return { message: `Lista de comandos:\n\n${commandsMap.join('\n')}` };
};

export default comandos;
