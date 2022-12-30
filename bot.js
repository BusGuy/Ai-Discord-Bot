const Discord = require("discord.js"); //require the discord library

const client = new Discord.Client(); //create a new instance of the Client class from the discord library
client.login(process.env.TOKEN); //log in to your bot using your token (found in the application page on the developer portal)

client.on("ready", () => {
  //once logged in, this event will be triggered and execute code inside it

  console.log("I'm ready!"); //output "I'm Ready" to indicate that our bot is connected and running

  client.user.setActivity("My Prefix is !"); //set the activity of our bot
});

client.on("message", (message) => {
  //listen for any messages sent in a channel that our bot can see

  if (!message.content.startsWith("!") || message.author.bot) return; //if the message doesn't start with "!", or it's from another bot, ignore it

  const args = message.content.slice(1).split(/ +/); //otherwise, split the text by spaces into an array called args
  const commandName = args[0].toLowerCase(); //and get the first word as a lowercase string (the command name)

  if (commandName == "ping") {
    //if the command is "ping"
    message.channel.send("Pong!"); //reply with "Pong!" to the same channel
  }
});
