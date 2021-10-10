const Telegrambot = require('node-telegram-bot-api');
process.env.NTBA_FIX_319 = 1;   // Fix
const { ID_BOT } = require('./config')
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(ID_BOT, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Received your message');
});