const discord  =  require("discord.js")
module.exports = {
  name: "invite",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => {
    
    
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
 .setAuthor("INVITA AL BOT DE TENDERETE CITY",client.user.displayAvatarURL())
.setDescription(`

[BOT DE TENDERETE CITY](https://discord.com/oauth2/authorize?client_id=874280802257608754&scope=bot&permissions=8)

[TENDERETE CITY DISCORD](https://discord.gg/tenderete)
`)
message.channel.send(embed)


}}