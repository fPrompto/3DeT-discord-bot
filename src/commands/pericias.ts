import { readFile } from '../utils/readWriteFile';
import IResponse from '../interfaces/response';

const pericias = async (): Promise<IResponse> => {
  const periciasFile = await readFile('src/data/pericias.json');

  const periciasMap = periciasFile.listaDePericias.map((data: any) => {
    return `• ${data.name}`
  });
  const a = 'Digite !pericia + (nome da pericia) para'
    + ' visualizar os detalhes';
  const b = 'Exemplo !pericia crime';

  return { message: `${a}\n${b}\n\n${periciasMap.join('\n')}` };
};

export default pericias;
