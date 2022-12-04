# Discord-Chat-Logger

**Setting up** 
Replace "CLIENT_TOKEN" with Account Token 
<details>
  <summary>How to get Account Token</summary>
  Paste it to console 
  ```javascript
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
  ```
</details>
Replace "CHANNEL_ID" with Discord chanel ID  

If u want to log more channels than one
<details>
  <summary>Adding more channels</summary>
  
```javascript
let hooks = {
    Chat: new WebhookClient({ id: 'ID', token: 'WEBHOOK_TOKEN' }),
    Gallery: new WebhookClient({ id: 'ID', token: 'WEBHOOK_TOKEN' }),
    Memes: new WebhookClient({ id: 'ID', token: 'WEBHOOK_TOKEN' }),
  }
  ```
```javascript
  let channels = {
    'CHANNEL_ID': hooks.Chat,
    'CHANNEL_ID': hooks.Gallery,
    'CHANNEL_ID': hooks.Memes,
  }
  ```
</details>
