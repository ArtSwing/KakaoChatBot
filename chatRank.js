const FS = FileStream, path = '/sdcard/chat.json';
if(!FS.read(path)) FS.write(path, '[]');
var chat = JSON.parse(FS.read(path));

function response(room, msg, sender, igc, replier){
    
    if(!chat.find(e=>e.name==sender)) chat.push({'name':sender, 'count':1});
    chat[chat.findIndex(e=>e.name==sender)].count++;

    if(msg=='!채팅순위'){
        var total = chat.map(e=>e.count).reduce((a,b)=>a+b);
        replier.reply('『 🗣️ Chat Rank 』'+'\u200b'.repeat(500)+'\nTotal : '+total+'\n'+'═'.repeat(20)+'\n\n'+chat.sort((a,b)=>b.count-a.count).slice(0,150).map((e,i)=>++i+'위 ['+e.count+'회, '+(e.count/total*100).toFixed(2)+'%] : '+e.name).join('\n\n')+'\n\n'+'═'.repeat(20));
    }

    if(msg=='!내채팅'){
        var index = chat.sort((a,b)=>b.count-a.count).findIndex(e=>e.name==sender);
        replier.reply('『 🗣️ Chat Info 』 '+sender+'\n'+'═'.repeat(12)+'\n『🏅』 순위 : '+(index+1)+'위\n『🏅』 채팅수 : '+chat[index].count+'회\n'+'═'.repeat(12));
    }

    FS.write(path, JSON.stringify(chat));

}
