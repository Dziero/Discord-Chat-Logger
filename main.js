const { Client, WebhookClient, } = require('discord.js-selfbot-v13');
const tokenClient = 'CLIENT_TOKEN'
const client = new Client({
    checkUpdate: false
});
client.on('ready', () => {console.log('Bot is running');})

let hooks = {
    id1: new WebhookClient({ id: 'ID', token: 'WEBHOOK_TOKEN' }),
  }
  let channels = {
    'CHANNEL_ID': hooks.id1,
  }

  client.on('message', msg => { 
      if (!Object.keys(channels).includes(msg.channel.id)) return;
      const message = msg.content;
      channels[msg.channel.id].send({
          content: message.replace('@', ' '),
          username: msg.member.nickname || msg.author.tag,
          avatarURL: msg.member.displayAvatarURL()
       }) 
  }) 
client.login(tokenClient);