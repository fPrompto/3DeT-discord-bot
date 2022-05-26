import { pericias as periciasFile } from "../data";
import IResponse from '../interfaces/response';

const pericias = (): IResponse => {
  const periciasMap = periciasFile.listaDePericias.map((data) => {
    return `• ${data.name}`
  });
  const a = 'Digite !pericia + (nome da pericia) para'
    + ' visualizar os detalhes';
  const b = 'Exemplo !pericia crime';

  return { message: `${a}\n${b}\n\n${periciasMap.join('\n')}` };
};

export default pericias;
