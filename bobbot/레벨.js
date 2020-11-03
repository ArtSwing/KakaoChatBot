if(room_name.indexOf(room)!=-1 && msg.indexOf('!레벨 ') != -1){
  var level=msg.split(' ');

  url = Utils.getWebText("https://maplestory.nexon.com/Ranking/World/Total?c="+level[1]);
  if(url.indexOf('랭킹정보가 없습니다.') != -1){
	 url = Utils.getWebText("https://maplestory.nexon.com/Ranking/World/Total?c="+level[1]+"&w=254");
  }
  if(url.indexOf('랭킹정보가 없습니다.') != -1){
	 replier.reply('랭킹정보가 없습니다.');
	 return;
  }

  url = url.toLowerCase()
  url = url.split('" alt="">'+level[1].toLowerCase()+'</a>')[1].split('</tr>')[0].replace(/(<([^>]+)>)/g,"");
  url = url.replace(/ /gi, '').replace(/\n\n\n/gi, '');
  url = url.split("lv.")[1];

  var char_lv = Number(url.split("\n")[0]);
  var char_ex = Number(url.split("\n")[1].replace(/,/gi, ''));

  if(char_lv==275){
	 replier.reply('[' + level[1] + ']\nLv.'+ char_lv);
	 return;
  }

  var lev_data=Command.output("레벨 레벨");
  var current_req_up = Number(lev_data.split(char_lv+'/')[1].split('\n')[0]) - Number(lev_data.split(char_lv-1+'/')[1].split('\n')[0]);
  var percentage = (char_ex/current_req_up*100).toFixed(2);
  var req_275=86473581694366-Number(lev_data.split(char_lv-1+'/')[1].split('\n')[0])-char_ex;
  var req_250=9654369842497-Number(lev_data.split(char_lv-1+'/')[1].split('\n')[0])-char_ex;   
  req_275=(req_275/1000000000000).toFixed(4).replace('.','조')+'억';
  req_250=(req_250/1000000000000).toFixed(4).replace('.','조')+'억';

  if(char_lv<250){
	 replier.reply('[' + level[1] + ']\nLv.'+ char_lv +' ('+ percentage + '%)' + '에서\nLv.250까지 ' + req_250 +'\nLv.275까지 ' + req_275);
	 return;
  }

  replier.reply('[' + level[1] + ']\nLv.'+ char_lv +' ('+ percentage + '%)' + '에서\nLv.275까지 ' + req_275);
  return;
}