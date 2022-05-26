import {
  vantagens as vantagensFile,
  vantagensUnicas as vantagensUnicasFile,
  pericias as periciasFile,
} from '../data';
import IResponse from '../interfaces/response';

const vantagens = (): string => {
  const { name, about } = vantagensFile;
  return `• ${name}\n\n${about}`;
};

const pericias = (): string => {
  const { name, about } = vantagensUnicasFile;
  return `• ${name}\n\n${about}`;
};

const vantagensUnicas = (): string => {
  const { name, about } = periciasFile;
  return `• ${name}\n\n${about}`;
};

const sobre = (args: Array<string>): IResponse => {
  if (args.join(' ') === 'vantagens unicas') {
    return { message: vantagensUnicas() };
  }

  if (args[0] === 'vantagens' || args[0] === 'vantagem') {
    return { message: vantagens() };
  }

  if (args[0] === 'pericias' || args[0] === 'pericia') {
    return { message: pericias() };
  }

  return { message: `No foi possvel localizar` };
};

export default sobre;
