import { readFile } from '../utils/readWriteFile';
import IResponse from '../interfaces/response';
import FilePath from '../enums/filesPath';

const vantagensFile = async (): Promise<any> => {
  return await readFile(FilePath.VANTAGENS);
};

const vantagensUnicasFile = async (): Promise<any> => {
  return await readFile(FilePath.VANTAGENS_UNICAS);
};

const periciasFile = async (): Promise<any> => {
  return await readFile(FilePath.PERICIAS);
};

const vantagens = async (): Promise<string> => {
  const { name, about } = await vantagensFile();
  return `• ${name}\n\n${about}`;
};

const pericias = async (): Promise<string> => {
  const { name, about } = await vantagensUnicasFile();
  return `• ${name}\n\n${about}`;
};

const vantagensUnicas = async (): Promise<string> => {
  const { name, about } = await periciasFile();
  return `• ${name}\n\n${about}`;
};

const sobre = async (args: Array<string>): Promise<IResponse> => {
  if (args.join(' ') === 'vantagens unicas') {
    return { message: await vantagensUnicas() };
  }

  if (args[0] === 'vantagens' || args[0] === 'vantagem') {
    return { message: await vantagens() };
  }

  if (args[0] === 'pericias' || args[0] === 'pericia') {
    return { message: await pericias() };
  }

  return { message: `Não foi possvel localizar` };
};

export default sobre;
