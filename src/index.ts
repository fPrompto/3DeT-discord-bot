import { Client, Intents } from 'discord.js';
import * as dotenv from 'dotenv';

import App from "./app";

dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const token = process.env.BOT_TOKEN;

const server = new App(client, token);

server.start();
