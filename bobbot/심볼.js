if(room_name.indexOf(room)!=-1 && msg.indexOf('!심볼 ') != -1){
  msg=msg.replace('!심볼 ','');
  var symbol=msg.split(' ');
  var total_req=0;
  var total_meso=0;
  var total_meso2=0;

  if(symbol.length != 2){
	 replier.reply('두개의 수를 입력해야 합니다.');
	 return;
  }

  for(i=0;i<2;i++){
	 if(symbol[i]<1 || symbol[i]>20){
		replier.reply( '1~20의 수를 입력해야 합니다.');
		return;
	 }
  }

  for (i=Number(symbol[0]);i<Number(symbol[1]);i++){
	 total_req+=i*i+11;   
	 total_meso+=12440000+6600000*i;
	 total_meso2+=2370000+7130000*i;
  }

  total_meso=total_meso.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  total_meso2=total_meso2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  replier.reply(symbol[0]+'에서 '+symbol[1]+'레벨까지\n요구량:'+total_req+'\n합메소:'+total_meso+'메소\n여로   :'+total_meso2+'메소');
}