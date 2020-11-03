if(room_name.indexOf(room)!=-1 && msg.indexOf('!추옵 ') != -1){
  var option=msg.split(' ');
  if (option[1]=='파프니르' || option[1]=='앱솔랩스' || option[1]=='아케인셰이드' || option[1]=='네크로' || option[1]=='반레온' || option[1]=='쟈이힌' || option[1]=='여제' || option[1]=='우트가르드' || option[1]=='자쿰' || option[1]=='제네시스'){
	 option[1]=option[1].replace('파프니르','파프');
	 option[1]=option[1].replace('앱솔랩스','앱솔');
	 option[1]=option[1].replace('아케인셰이드','아케인');
  }
  if (option.length == 3){
	 option[2]=option[2].toUpperCase();
  }
  if (option[1] == '제로'){
	 replier.reply(Command.output(option[0]+' '+option[1]));
	 return;
  }
  if (option[1] == '해카세'){
	 replier.reply(Command.output(option[0]+' '+option[1]));
	 return;
  }
  var data=Command.output(option[0]+' '+option[1]);
  if (data.indexOf('*'+option[2]+'\n') == -1){
	 replier.reply(data);
	 return;
  }
  var str=data.split('*'+option[2]+'\n')[1].split('\n\n')[0];  
  replier.reply(str);
}