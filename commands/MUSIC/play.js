const { MessageEmbed } = require('discord.js')
const delay = require("delay")
module.exports = {
  name: "play",
  aliases: ["p", "reproducir"],
  botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  vcOnly: true,
  sameVc : true,
  

run:async (client, message, args)=> {
const color = message.guild.me.roles.highest.color
let {channel} = message.member.voice
 let play = message.client.manager.players.get(message.guild.id)

  
  if (!args.length) {
    let embed = new MessageEmbed()
      .setColor("FF0000")
      .setDescription(`❌ Debes introducir el nombre o enlace de la canción para que te la pueda poner.`)
    return message.channel.send(embed)
  }

 
  if (!play) {
    const player = message.client.manager.create({
      guild: message.guild.id,
      voiceChannel: channel.id,
      textChannel: message.channel.id,
      selfDeafen: true,
    })

    if (!channel.joinable) {
      let embed = new MessageEmbed()
        .setColor("RED")
        
        .setDescription("❌ No puedo unirme a tu canal de voz.")
      return message.channel.send(embed)
    }

    player.connect()
  }

  const player = message.client.manager.players.get(message.guild.id)
 if (channel.id !== player.voiceChannel) {
      let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription("❌ Ya estoy en otro canal reproduciendo música, unete para poder utilizarme."
        
        
        )
   return message.channel.send(embed)
 }
 
  const search = args.join(' ')
  let res

let msg = message.channel.send(`🔄 **__Buscando__** 🔄 \n\`\`\`fix\n ${search}\`\`\`\n`).then(m => m.delete({ timeout: 5000 }));
			
  try {
    res = await player.search(search, message.author)
    if (res.loadType === 'LOAD_FAILED') {
      if (!player.queue.current) player.destroy()
      throw new Error(res.exception.message)
    }
  } catch (err) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      
      .setDescription(`❌ No puedo encontrar ningún resultado de: \`${search}\`, asegurate de haber introducido el enlace/nombre de la canción correctamente.`)
    return message.channel.send(embed)
  }

  switch (res.loadType) {
    case 'NO_MATCHES':
      if (!player.queue.current) player.destroy()
      let embed = new MessageEmbed()
        .setColor("428CCF")
        
        .setDescription(`❌ No puedo encontrar ningún resultado de: \`${search}\`, asegurate de haber introducido el enlace/nombre de la canción correctamente.`)
      return message.channel.send(embed)

    case 'TRACK_LOADED':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
      let embed2 = new MessageEmbed()
        .setColor("428CCF")
        .setTitle(`En cola`)
        .setDescription(`[${res.tracks[0].title}](${res.tracks[0].uri})`)
      if (player.queue.length >= 1) //await delay(4900)
      message.channel.send(embed2)
      return

    case 'PLAYLIST_LOADED':
      await player.queue.add(res.tracks)
      if (!player.playing && !player.paused && player.queue.size + 1 === res.tracks.length) player.play();
      let embed3 = new MessageEmbed()
        .setColor("428CCF")
        .setTitle(`En cola`)
        .setDescription(`**${res.playlist.name}** \`[${res.tracks.length} canciones]\``)
      if (player.queue.length >= res.tracks.length) 
   //  await delay(4900) 
      message.channel.send(embed3)
      return;

    case 'SEARCH_RESULT':
      await player.queue.add(res.tracks[0])
      if (!player.playing && !player.paused && !player.queue.length) player.play()
      let embed4 = new MessageEmbed()
        .setColor("428CCF")
        .setTitle(`Canción añadida a la cola`)
        .setDescription(  `[${res.tracks[0].title}](${res.tracks[0].uri})`)
      if (player.queue.length >= 1) //await delay(4900)
      message.channel.send(embed4)
      return;
  }
}
}