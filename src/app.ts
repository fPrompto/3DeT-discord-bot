import { Client, Message } from 'discord.js';

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
      const commandBody = message.content.slice(this.prefix.length);
      const args = commandBody.split(' ');
      const command = args.shift().toLowerCase();
    });

    return this.client.login(this.token);
  }
}

export default App;
