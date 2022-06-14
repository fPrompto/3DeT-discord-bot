import { readFile } from '../utils/readWriteFile';
import IResponse from '../interfaces/response';
import FilePath from '../enums/filesPath';

const desvantagens = async (): Promise<IResponse> => {
  const desvantagensFile = await readFile(FilePath.DESVANTAGENS);

  const desvantagensMap = desvantagensFile.desvantagens
    .map((data: any) => {
      const { name, cost } = data;

      return `• ${name}(${cost})`;
    });

  const a = 'Digite !desvantagem + (nome da desvantagem) para'
    + ' visualizar os detalhes';
  const b = 'Exemplo !desvantagem monstruoso';

  return { message: `${a}\n${b}\n\n${desvantagensMap.join('\n')}` };
};

export default desvantagens;
