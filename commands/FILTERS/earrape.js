const { MessageEmbed} = require("discord.js")
const delay = require('delay');

module.exports = {
  name:"earrape",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
  run: async(client,message,args) => {
    
   
const player = message.client.manager.players.get(message.guild.id)
  
    
     if (!player) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("❌ No hay nada sonando para aplicar este efecto.")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("❌ Debes estar conectado a un canal de voz.")
    return message.channel.send(embed)
  }

   if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`❌ Debes estar en el mismo canal de voz que yo para poder utilizarme.`)
    return message.channel.send(embed)
  }


		player.setVolume(500);
		player.setEQ(...Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.5 })));

		const embed = new MessageEmbed()
			.setDescription('melody set to **earrape**. ')
			.setColor("blue");
		return message.channel.send(embed);
	
    	if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
    	  player.setEQ(Array(13).fill(0).map((n, i) => ({
            band: i,
            gain: 0
        })));
		player.clearEffects()
		const msg = await message.channel.send(` Turning off **earrape**. This may take a few seconds...`);
			const embed = new MessageEmbed()
				.setDescription('Turned off **earrape**')
				.setColor("BLUE");
			await delay(5000);
			return msg.edit('', embed);
    	}
    
    
    
  }
};