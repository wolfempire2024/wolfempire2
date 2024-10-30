const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

const token = process.env.token;
const prefix = config.prefix;


client.on("ready",() => {

          console.log(`Bot: [ ${client.user.username} ]\nStatus: [ ONLINE ] `)
})


client.on("message",async wolf => {

  if(wolf.content.startsWith(prefix + "say")){

    if(!wolf.member.permissions.has("ADMINISTRATOR")) return;
    
    let msg = wolf.content.split(' ').slice(1).join(" ")
    wolf.delete()

    let embed = new Discord.MessageEmbed()
    .setTitle("**WoLF Empire**")
    .setThumbnail(wolf.guild.iconURL({dynamic:true}))
    .setColor("ORANGE")
    .setDescription(msg)


    wolf.channel.send(embed)
                      
  }
})

client.login(token)
