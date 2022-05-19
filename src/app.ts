import { Client, Message } from 'discord.js';
import commandService from './services/commandService';

class App {
  private client: Client;
  private token: string;
  public prefix: string = '!';

  constructor(client: Client, token: string) {
    this.client = client;
    this.token = token;
  }

  public start(): Promise<string> {
    this.client.on('message', (message: Message) => {
      const commandBody: string = message.content.slice(this.prefix.length);
      const args: Array<string> = commandBody.split(' ');

      const command: string | undefined = args.shift()?.toLowerCase();

      const service = new commandService();

      service.run(command, args, message);
    });

    return this.client.login(this.token);
  }
}

export default App;
