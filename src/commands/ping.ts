import { Message } from 'discord.js';
import IResponse from '../interfaces/response';

const ping = (message: Message): IResponse => {
  const timeTaken = Date.now() - message.createdTimestamp;

  return { message: `Pong! This message had a latency of ${timeTaken}ms.` };
};

export default ping;
