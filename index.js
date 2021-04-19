const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client(); 
const config = require('./config.json');
client.config = config

fs.readdir("./events", (err_, files) =>{
    files.forEach((file) =>{
        if(!file.endsWith(".js")) return; 
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Evento Cargado: ${eventName}`)
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)]
    });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err_, files) =>{
    files.forEach((file)=>{
        if(!file.endsWith(".js")) return; 
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`Comando Cargado: ${commandName}`)
    });
});

client.login("EL TOKEN DEL BOT AQUI")
