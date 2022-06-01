import { readFile } from '../utils/readWriteFile';
import Message from '../enums/messages';
import normalizeString from '../utils/normalizeString';
import IResponse from "../interfaces/response";

const detalhesPericia = async (args: Array<string>): Promise<IResponse> => {
  const pericias = await readFile('src/data/pericias.json');

  const filterArgs = args.join(' ');

  const vFind = pericias.listaDePericias.find((v: any) => {
    const vName = normalizeString(v.name);
    const vArgs = normalizeString(filterArgs);

    return vName.includes(vArgs);
  });

  if (!vFind) {
    return { message: Message.PERICIA_ERROR };
  }
  const messageToReply = `• ${vFind.name}(${vFind.cost})\n\n${vFind.description})`;

  return { message: messageToReply };
};

export default detalhesPericia;