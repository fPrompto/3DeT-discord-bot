import { vantagens } from "../data";
import Message from '../enums/messages';
import normalizeString from '../utils/normalizeString';
import IResponse from "../interfaces/response";

const detalhesVantagem = (args: Array<string>): IResponse => {
  const filterArgs = args.join(' ');

  const vFind = vantagens.vantagens.find((v) => {
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
