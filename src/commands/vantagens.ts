import { readFile } from '../utils/readWriteFile';
import IResponse from '../interfaces/response';
import FilePath from '../enums/filesPath';

const vantagens = async (): Promise<IResponse> => {
  const vantagensFile = await readFile(FilePath.VANTAGENS);

  const vantagensMap = vantagensFile.vantagens.map((data: any) => {
    const { name, cost } = data;

    return `• ${name}(${cost})`;
  });
  const a = 'Digite !vantagem + (nome da vantagem) para'
    + ' visualizar os detalhes';
  const b = 'Exemplo !vantagem xama';

  return { message: `${a}\n${b}\n\n${vantagensMap.join('\n')}` };
};

export default vantagens;
