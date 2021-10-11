const { ID_BOT } = require('./config')
const Telegraf = require('telegraf')
const bot = new Telegraf(ID_BOT)

let BaseDeDatos = []	//Intentar usar las Sessions de telegraf


bot.start((ctx) => {
	ctx.reply('Holii^^');
})

bot.help((ctx) => {
	ctx.reply('Help, its not fun :O');
})

bot.settings((ctx) => {
	ctx.reply('setting');
})

// Se espera que llegue (Persona, Día). Luego ya veremos fecha en ves de día.
bot.command('add', (ctx) => {
	ctx.reply('Comando de añadir a la lista de cumples')
	const textChat = ctx.message.text.split(' ')

	if (textChat.length != 3)
		ctx.reply("Necesito que me digas /add Nombre Dia")
	else if (BaseDeDatos[textChat[1]])
		ctx.reply(`Lo siento, ya tenemos registrado a ${textChat[1]} ;.;`)
	else {
		BaseDeDatos[textChat[1]] = textChat[2]
		ctx.reply("Añadido para notificar jeje")
	}

	//console.log(typeof(ctx.message.text))

})

bot.command('ver', (ctx) => {
	let a = 'Aca tenemos a:\n'

	for (i in BaseDeDatos) {
		a = a + `* ${i}: el día ${BaseDeDatos[i]}\n`
	}

	ctx.reply(a)
})

// Lo ejecuta
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))