import { Message } from 'discord.js';

import Messages from '../enums/messages';

const randomNumber = (max: number) => {
  const randomN = Math.floor(Math.random() * max + 1);

  return randomN;
};

const rollDice = (message: Message, command: string) => {
  const diceValues = command.split('d');
  const diceQuantity: number = Number(diceValues[0]);
  const diceNumber: number = Number(diceValues[1]);

  let total: Array<string> = [];
  let totalDice: Array<number> = [];

  if (diceQuantity > 100) {
    return message.reply(Messages.DICE_QUANTITY_ERROR);
  }

  if (diceNumber > 100) {
    return message.reply(Messages.DICE_NUMBER_ERROR);
  }

  for (let i = 0; i < diceQuantity; i++) {
    const value = randomNumber(Number(diceNumber));

    totalDice.push(value);
    total.push(`• ${i + 1}: d${diceNumber} => ${value}`);
  }

  const totalValue = totalDice.reduce((acc: number, current: number) => {
    return acc + current;
  });

  message.reply(`${total.join('\n')}\n\nTotal: ${totalValue}`);
};

export default rollDice;
