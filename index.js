const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./commands/commands.js')

client.on('ready', () => {
	console.log('Tarky is Ready!')

	// Ping <-> Pong test
	command(client, ['ping', 'test'], message => {
		message.reply('Pong!')
	})

	// shows member count of every server the bot is on
	command(client, 'servers', message => {
		client.guilds.cache.forEach(guild => {
			message.reply(`${guild.name} has a total of ${guild.memberCount} members`)
		})
	})

	// why not?
	command(client, 'joke', message => {
		message.reply('your life is enough of a joke :recycle: ')
	})

	// clears all the messages in the channel (Only if user has ADMINISTRATOR role)
	command(client, 'cc', message => {
		if (message.member.hasPermission('ADMINISTRATOR')) {
			message.channel.messages.fetch().then(results => {
				message.channel.bulkDelete(results)
			})
		}
	})


	// change the bot status (Only if user has ADMINISTRATOR role)
	command(client, 'status', message => {
		if (message.member.hasPermission('ADMINISTRATOR')){
			const content = message.content.replace('!status ', '')

			client.user.setPresence({
				activity: {
					name: content,
					type: 0,
				}
			})
		}
	})

})

client.login(config.token)