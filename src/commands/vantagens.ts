import { vantagens as vantagensFile } from '../data';
import IResponse from '../interfaces/response';

const vantagens = (): IResponse => {
  const vantagensMap = vantagensFile.vantagens.map((data) => {
    const { name, cost } = data;

    return `• ${name}(${cost})`;
  });
  const a = 'Digite !vantagem + (nome da vantagem) para'
    + ' visualizar os detalhes';
  const b = 'Exemplo !vantagem xama';

  return { message: `${a}\n${b}\n\n${vantagensMap.join('\n')}` };
};

export default vantagens;
