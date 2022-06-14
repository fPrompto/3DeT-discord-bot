import { readFile } from '../utils/readWriteFile';
import normalizeString from '../utils/normalizeString';
import Message from '../enums/messages';
import IResponse from "../interfaces/response";
import FilePath from '../enums/filesPath';

const detalhesDesvantagem = async (args: Array<string>): Promise<IResponse> => {
  const desvantagensFile = await readFile(FilePath.DESVANTAGENS);

  const filterArgs = args.join(' ');

  const vFind = desvantagensFile.desvantagens.find((v: any) => {
    const vName = normalizeString(v.name);
    const vArgs = normalizeString(filterArgs);

    return vName.includes(vArgs);
  });

  if (!vFind) {
    return { message: Message.DESVANTAGEM_ERROR };
  }
  const messageToReply = `• ${vFind.name}(${vFind.cost})\n\n${vFind.description})`;

  return { message: messageToReply };
};

export default detalhesDesvantagem;
