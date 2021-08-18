const delay = require('delay');
const { MessageEmbed } = require('discord.js');
//const { nightcore } = require('../../utils/filter.js')

module.exports = { 
        name: "nightcore",
          botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
 
        description: "Turning on nightcore filter",
        category: "filters",
        accessableby: "Member",
        aliases: [],
    

    run: async (client, message) => {
        const msg = await message.channel.send("<a:MelodyM_loading:839504372815626301>Turning on **Nightcore**.");

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
  player.setNightcore(!player.nightcore);
	
        const nightcored = new MessageEmbed()
            .setTitle("<:emoji_16:763367280817471498> Turned on : nightcore ")
            .setColor('#000001');

        await delay(5000);
        msg.edit('', nightcored);
           
     	if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		player.clearEffects()
		const msg = await message.channel.send(`<a:MelodyM_loading:839504372815626301>Turning off **nightcore**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned off **nightcore**')
				.setColor("BLUE");
			await delay(5000);
			return msg.edit('', embed);
    	}
          
           
           
            }
};