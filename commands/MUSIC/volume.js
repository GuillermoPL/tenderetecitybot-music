const { MessageEmbed } = require('discord.js')
const embed = require("../../paras/embed")
module.exports = {
  name: "volume",
  vcOnly:true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: (client, message, args) => {
  const player = message.client.manager.players.get(message.guild.id)
  const color = message.guild.me.roles.highest.color

  if (!player) {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription("❌ No hay nada sonando.")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  
  if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription(`❌ Debes estar en el mismo canal de voz que yo.`)
    return message.channel.send(embed)
  }
  if (!args.length) {
    let embed = new MessageEmbed()
      .setColor("RED")
      
      .setDescription(`❌ Debes introducir un volumen del 1 al 100. `)
  
    return message.channel.send(embed)
  }

  if (isNaN(args[0])) {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription("❌ Debes introducir un número del 1 al 100.")
    return message.channel.send(embed)
  }

  if (args[0] < 1 || args[0] > 100) {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription("❌ Debes introducir un volumen del 1 al 100.")
    return message.channel.send(embed)
  }

  const volume = Number(args[0])

  player.setVolume(volume)
  return message.channel.send(
    {
      embed: {
        color: "YELLOW",
      description:`✅ Volumen actualizado a: ${args[0]}`,}})
}}