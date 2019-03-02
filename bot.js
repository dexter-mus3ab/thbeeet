const Discord = require("discord.js");
const client = new Discord.Client()
 
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "466644701785882645" && ch.type === 'voice').join();
});

client.login(process.env.BOT_TOKEN);



