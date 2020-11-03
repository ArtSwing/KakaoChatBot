if(room_name.indexOf(room)!=-1 && msg.indexOf('!유니온 ') != -1){
  var union=msg.split(' ');
  var url = Utils.getWebText("https://maple.gg/u/"+union[1]);
  if(url.indexOf('검색결과가 없습니다.') != -1){
	 replier.reply('[' + union[1] + ']\n' + '존재하지 않는 캐릭터 입니다.');
	 return;
  }
  
  var data = url.split('bg-yellow">')[1].split('업적')[0].replace(/(<([^>]+)>)/g,"");
  data = data.replace(/ /gi, '');
  data = data.replace(/\n/gi, '');

  if (data.indexOf('기록이없습니다.') != -1){
	 replier.reply('[' + union[1] + ']\n' + '기록이 없습니다.');
	 return;
  }

  else{
	 var grade = data.split('유니온')[1].split('Lv')[0];
	 var level = data.split('Lv.')[1].split('전투력')[0];
	 var power = data.split('전투력')[1].split('월드랭킹')[0];
	 var coin = power.replace(/,/gi, '');
	 coin = Math.floor(coin * 0.000000864);

  }
  replier.reply('[' + union[1] + ']\n' + grade + '(Lv.' + level + ')\n전투력: ' + power + '\n일일코인 수급량: '+ coin);
}