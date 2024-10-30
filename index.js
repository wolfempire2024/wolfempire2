const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

const token = process.env.token;
const prefix = config.prefix;

const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});

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
