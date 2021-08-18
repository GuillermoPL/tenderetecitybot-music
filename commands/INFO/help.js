const discord  =  require("discord.js")
module.exports = {
  name: "help",
  aliases: ["ayuda", "comandos"],
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => { 
    
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
 .setAuthor("Ayuda de comandos",client.user.displayAvatarURL())
 .setURL(`https://discord.gg/tenderete`)
.setDescription(`

__**COMANDOS MÚSICA**__

**Generales:**
\`clear,join,leave,loop,move,nowplaying,pause,play,previous,queue,remove,resume,search,skip,stop,volume\`
**Filtros y configuración:**
\`24/7,radio,bass,bassboost,deepbass,earrape,nightcore,pitch,pop,reset,soft,speed,television,vaporwave\`

__**COMANDOS SUGERENCIAS**__

**Comandos para realizar una sugerencia:**
\`suggest, sugerir, sugerencia\`
**Comandos del staff para configurar las sugerencias:**
\`canalsugerencia, valorarsugerencia\`

__**COMANDOS GENERALES**__

**Comandos de utilidad y configuración:**
\`about,prefix,ping,lavalink,uptime,invite\`

__**TENDERETE CITY**__

[DISCORD](https://discord.gg/tenderete)
[PÁGINA WEB](https://tenderetecity.es)`)
 
.setFooter("Hecho por Guille#5961 para Tenderete City",client.user.displayAvatarURL())
message.channel.send(embed)
  }
}