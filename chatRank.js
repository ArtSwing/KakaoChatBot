const FS = FileStream, path = '/sdcard/chat.json';
if(!FS.read(path)) FS.write(path, '[]');
var chat = JSON.parse(FS.read(path));

function response(room, msg, sender, igc, replier){
    
    if(!chat.find(e=>e.name==sender)) chat.push({'name':sender, 'count':1});
    chat[chat.findIndex(e=>e.name==sender)].count++;

    if(msg=='!채팅순위'){
        var total = chat.map(e=>e.count).reduce((a,b)=>a+b);
        replier.reply('『 ️ Chat Rank 』'+'\u200b'.repeat(500)+'\nTotal : '+total+'\n'+'═'.repeat(20)+'\n\n'+chat.sort((a,b)=>b.count-a.count).slice(0,150).map((e,i)=>++i+'위 ['+e.count+'회, '+(e.count/total*100).toFixed(2)+'%] : '+e.name).join('\n\n')+'\n\n'+'═'.repeat(20));
    }

    if(msg=='!내채팅'){
        var index = chat.sort((a,b)=>b.count-a.count).findIndex(e=>e.name==sender);
        replier.reply('『 ️ Chat Info 』 '+sender+'\n'+'═'.repeat(12)+'\n『』 순위 : '+(index+1)+'위\n『』 채팅수 : '+chat[index].count+'회\n'+'═'.repeat(12));
    }
    if(msg == '!도움말 채팅') {
	  replier.reply('!채팅기록\n' + '-> 현재 방의 채팅 기록 확인\n\n' +
	  '!채팅기록 (방이름)\n' + '-> 해당 방의 채팅 기록 확인\n\n' + '!채팅기록 전체\n' + '-> 해당 방의 채팅 기록 확인\n\n'
	 +'!채팅기록 전체\n' + '-> 모든 방의 채팅 기록 확인\n\n' +'!채팅기록 (유저이름)\n' + '-> 해당 유저의 채팅 기록 확인\n\n'
	 +'!채팅초기화\n' + '-> 현재 방의 채팅 기록 초기화\n\n' +'!채팅초기화 (방이름)\n' + '-> 해당 방의 채팅 기록 초기화\n\n'
	 +'!채팅초기화 전체\n' + '-> 모든 방의 채팅 기록 초기화\n\n' +'!채팅순위\n' + '-> 말 많이한 순위확인\n\n'
	 +'!내채팅\n' + '-> 내채팅만 확인' );
   }

    FS.write(path, JSON.stringify(chat));

}
