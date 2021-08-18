const discord  =require("discord.js")
module.exports  = {
name: "about",
aliases: ["info","botinfo","stats"], 
botPermission: ["EMBED_LINKS","USE_EXTERNAL_EMOJIS"],
run : async (client,message,args )=> {
  
  
  
  let embed  = new discord.MessageEmbed()
    
   .setColor("GREEN")
 .setAuthor(`${client.user.username} Informacion`,client.user.displayAvatarURL())
 
    
.addField(`
**DESARROLLADOR**`,
`Guille#5961`)

.addField(`**PLATAFORMA**`,
`${process.platform}`)

.addField(`**SERVIDORES**`,
`${client.guilds.cache.size}`)

.addField(`**PING**`,
`${client.ws.ping}`)

.addField(`**GUILD ID**`,
`${message.guild.id}`)





message.channel.send(embed)
}}