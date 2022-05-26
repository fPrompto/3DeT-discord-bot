import { desvantagens as desvantagensFile } from '../data';
import IResponse from '../interfaces/response';

const desvantagens = (): IResponse => {
  const desvantagensMap = desvantagensFile.desvantagens
    .map((data) => {
      const { name, cost } = data;

      return `• ${name}(${cost})`;
    });

  const a = 'Digite !desvantagem + (nome da desvantagem) para'
    + ' visualizar os detalhes';
  const b = 'Exemplo !desvantagem monstruoso';

  return { message: `${a}\n${b}\n\n${desvantagensMap.join('\n')}` };
};

export default desvantagens;
