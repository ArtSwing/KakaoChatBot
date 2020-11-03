if(room_name.indexOf(room)!=-1 && msg.indexOf('!시드 ') != -1){
  var seed=msg.split(' ');
  var url = Utils.getWebText("https://maple.gg/u/"+seed[1]);
  if(url.indexOf('검색결과가 없습니다.') != -1){
	 replier.reply('[' + seed[1] + ']\n' + '존재하지 않는 캐릭터 입니다.');
	 return;
  }

  var data = url.split('bg-yellow-green">')[1].split('유니온')[0].replace(/(<([^>]+)>)/g,"");
  data = data.replace(/ /gi, '');
  data = data.replace(/\n/gi, '');

  if (data.indexOf('기록이없습니다.') != -1){
	 replier.reply('[' + seed[1] + ']\n' + '기록이 없습니다');
	 return;
  }

  else{
	 var info = data.split('초')[1].split('월드')[0];
	 var floor = data.split('록')[1].split('층')[0];
	 var time = data.split('층')[1].split('Lv')[0];
	 var date = data.split('기준일:')[1];

	 replier.reply('[' + seed[1] + ']\n' + info + '\n기록: ' + floor + '층\n시간: ' + time + '\n날짜: ' + date);
  }
}
