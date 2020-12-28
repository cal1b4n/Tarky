# Tarky - A DiscordJS Bot

Hi! I'm Tarky, a multifunctional Discord bot written using [discord.js]([discord.js](https://discord.js.org/#/))
The functional is pretty scarce as of 20/12/2020 however this repo will be frequently updated for everyone to use!

#### If you want to add commands feel free to fork this repository and tweak the bot however you want

# Setup
First of all, clone repository to your pc using
> git clone https://github.com/cal1b4n/Tarky.git

Afterwards open file directory and open Command Prompt (or Terminal, doesn't really matter) and run
> npm install

Let npm download all the necessary packages

# Files to edit
open config.json and change
```
{
	"prefix" : "!",
	"token" : "your-discord-bot-token-goes-here"
}
```
add your discord app token which you can find [here](https://discord.com/developers/applications)

# Run the bot
And lastly: use 
>npm index.js

to run the bot


# Commands
I've currently added pretty simple commands for testing purposes
>!servers Shows member count of every server the bot is on
>!joke (Why not?!)
>!cc (clears all the messages in the channel (Only if user has ADMINISTRATOR role)
>!status <parameters> (changes bot status (Only if user has ADMINISTRATOR role)
