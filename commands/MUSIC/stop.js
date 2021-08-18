const { MessageEmbed } = require('discord.js')

module.exports= {
  name: "stop",
  aliases: ["parar"],
  vcOnly: true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: (client, message, args) => {
  const player = message.client.manager.players.get(message.guild.id)
  const color = message.guild.me.roles.highest.color

 if (!player) {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription("❌ No hay nada sonando para pararlo.")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  
  if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription(`❌ Debes estar en el mismo canal de voz que yo.`)
    return message.channel.send(embed)
  } 
  player.destroy()
  return message.channel.send({
    embed: {
      color: "FF0000",
      description: " ⏹ PARADO CORRECTAMENTE ⏹"
 } })
}}