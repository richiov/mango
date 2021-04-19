const prefix = "!";
const Discord = require('discord.js')
module.exports = {
    name: "help", 
    description: "My Commands", 
    run: async(client, message, args) =>{
        const embed = new Discord.MessageEmbed()
        .setTitle('En que Puedo Ayudarte?');
        message.channel.send(embed)
    }
}
