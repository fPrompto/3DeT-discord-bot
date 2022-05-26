import { desvantagens as desvantagensFile } from "../data";
import normalizeString from '../utils/normalizeString';
import Message from '../enums/messages';
import IResponse from "../interfaces/response";

const detalhesDesvantagem = (args: Array<string>): IResponse => {
  const filterArgs = args.join(' ');

  const vFind = desvantagensFile.desvantagens.find((v) => {
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
