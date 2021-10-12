import { Bot } from "grammy";
import { ID_BOT } from "./config";

const bot = new Bot(ID_BOT);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start your bot
bot.start()