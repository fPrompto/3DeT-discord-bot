import { readFile } from '../utils/readWriteFile';
import IResponse from '../interfaces/response';
import FilePath from '../enums/filesPath';

const comandos = async (): Promise<IResponse> => {
  const commands = await readFile(FilePath.COMMANDS);

  const commandsMap = commands.map((data: any) => {
    const { command, description } = data;

    return `• ${command} - ${description}`;
  });

  return { message: `Lista de comandos:\n\n${commandsMap.join('\n')}` };
};

export default comandos;
