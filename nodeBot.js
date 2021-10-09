const Telegrambot = require('node-telegram-bot-api');

const { ID_BOT, HOLA} = require('./config')







console.log("esta es la variable: ", HOLA)
/*
const bot = Telegrambot(ID_BOT, {polling: true})

bot.onText(/^\hola/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hola " + msg.from.first_name);
})

bot.onText(/^\/borratodo/, (msg) => {
    let chatId = msg.chat.id;
    let messageId = msg.message_id;
    let replyMessage = msg.reply_to_message.message_id;

    // noinspection PointlessBooleanExpressionJS
    if (msg.reply_to_message === undefined){
        return;
    }

    bot.deleteMessage(chatId, messageId);
    bot.deleteMessage(chatId, replyMessage);
});

 */