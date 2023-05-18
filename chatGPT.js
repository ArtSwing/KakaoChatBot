function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.startsWith('^')) {

    if (msg.substr(1).toUpperCase() === 'RESET') {
      Chat = {};
      replier.reply('Reset 되었습니다.');
    }
    else {
      replier.reply(chatgpt(msg.substr(1).trim(), room));
    }

  }
}


var Chat = {};
const CHAT_LENGTH = 10;
const API_KEY = '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';

function chatgpt(msg, room) {
  try {

    // load saved chats
    if (Chat.hasOwnProperty(room)) {
      var chat = Chat[room];
    } else {
      var chat = [];
    }
    
    // add a new chat
    chat.push({'role': 'user', 'content': msg});

    // the chat message
    var data = {
      'model': 'gpt-3.5-turbo-0301',
      'messages': chat
    };
    data = JSON.stringify(data);

    // request
    var ans = org.jsoup.Jsoup.connect('https://api.openai.com/v1/chat/completions')
      .timeout(60 * 1000)
      .header('Content-Type', 'application/json')
      .header('Authorization', 'Bearer ' + API_KEY)
      .requestBody(data)
      .ignoreHttpErrors(true)
      .ignoreContentType(true)
      .post().text();

    ans = JSON.parse(ans);

    // check error response
    if (ans && ans.hasOwnProperty('error'))
      throw new Error(ans.error.message);

    ans = ans.choices[0].message.content.trim();

    // add a response and remove old chats
    chat.push({'role': 'assistant', 'content': ans});
    if (chat.length > CHAT_LENGTH)
      chat = chat.slice(-CHAT_LENGTH);
    
    // save chats
    Chat[room] = chat;

    return ans;
  } catch (e) {
    return e;
  }
}