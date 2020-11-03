
if(room_name.indexOf(room)!=-1 && msg.indexOf('!방무 ') != -1){
  var numbers=msg.replace('!방무 ','').split(' ');
  var monster=numbers[0];
  var num=1;

  if(numbers.length<2){
	 replier.reply('두개 이상의 수를 넣어야 합니다.');
	 return;
  }
  for (i=1;i<numbers.length;i++){
	 if(numbers[i]>0 && numbers[i]<100){
		for (i=1;i<numbers.length;i++){
		   numbers[i]=(1-numbers[i]/100);
		   num*=numbers[i];
		}
		num=((1-num)*100).toFixed(2);
		var boss_damage=((1-((1-num/100)*monster/100))*100).toFixed(2);
		if (boss_damage<=0){
		   boss_damage=0;
		}
		replier.reply('총합방무:'+num+'%\n방어율'+monster+'% 보스에게딜량:'+boss_damage+'%');
	 }
	 else{
		replier.reply('입력한 값이 잘못되었습니다.');
	 }
  }
}