
const { default_prefix } = require("../../config.json")
const embed = require("../../paras/embed")
module.exports = {
  name: "prefix",
  category: "moderation",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 userPermission: ["MANAGE_GUILD"],
  usage: "prefix <new-prefix>",
  description: "Cambia el prefijo del bot",
  run: async (client, message, args) => {
    
    if(!args[0]) {
      return embed("Por favor introduce el prefijo que quieres establecer", message.channel)
    } 
    
    if(args[1]) {
      return embed("You can not set prefix a double argument",message.channel )
    }
    
    if(args[0].length > 3) {
      return embed("You can not send prefix more than 3 characters",message.channel)}
    
    if(args.join("") === default_prefix) {
      client.db.delete(`prefix_${message.guild.id}`)
     return await embed("Prefijo restablecido ", message.channel)
    }
    
    client.db.set(`prefix_${message.guild.id}`, args[0])
  await embed(`Prefijo del bot establecido a: ${args[0]}`,message.channel)
    
  }
}