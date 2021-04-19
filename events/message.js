module.exports = async (client, message) =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(client.config.prefix)) return;
    if(message.content.indexOf(client.config.prefix) !==0) return;
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let cmd = client.commands.get(command)
    if(!cmd) return;
    cmd.run(client, message, args);
}
