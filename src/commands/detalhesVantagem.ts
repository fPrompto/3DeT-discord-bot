import { readFile } from '../utils/readWriteFile';
import Message from '../enums/messages';
import normalizeString from '../utils/normalizeString';
import IResponse from "../interfaces/response";

const detalhesVantagem = async (args: Array<string>): Promise<IResponse> => {
  const vantagens = await readFile('src/data/vantagens.json');

  const filterArgs = args.join(' ');

  const vFind = vantagens.vantagens.find((v: any) => {
    const vName = normalizeString(v.name);
    const vArgs = normalizeString(filterArgs);

    return vName.includes(vArgs);
  });

  if (!vFind) {
    return { message: Message.VANTAGEM_ERROR };
  }
  const messageToReply = `• ${vFind.name}(${vFind.cost})\n\n${vFind.description})`;

  return { message: messageToReply };
};

export default detalhesVantagem;
