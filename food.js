const scriptName="food.js";
const room_name = ["밥봇체험관"];
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const Command = {};
const arr_category = {'한식','일식','중식','양식','회식','레스토랑','베트남','여름','겨울','다이어트','패스트푸드'};

Command.output = function(category) {

   var file = new java.io.File(sdcard+'/bobbot/data/밥추천/'+category+'.txt');
      if(!(file.exists())) {  
         return '잘못된 카테고리입니다.\n -카테고리 검색 명령어-\n!밥추천 카테고리';
      }
   var fis = new java.io.FileInputStream(file);
   var isr = new java.io.InputStreamReader(fis);
   var br = new java.io.BufferedReader(isr);
   var str = br.readLine();

   var line = "";

   while((line = br.readLine()) !== null) {
      str += " " + line;
   }
         
   fis.close(); 
   isr.close();
   br.close();
   return str;
};

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
	if(room_name.indexOf(room)!=-1 && msg.indexOf('!밥추천 ') != -1){

	  
	  var bob=msg.split(' ');
	  var randomNo = Math.random();
	  
	  //명령어가 !밥추천 인 경우
	  if(bob.length == 1){
		  var category = arr_category[Math.floor(randomNo * arr_category.length)];
		  var lstMenu = Command.output(category);
		  var menu = lstMenu.split(" ");
		  
		  randomNo = Math.random();
		  
		  replier.reply("-추천 메뉴-\n" + menu[Math.floor(randomNo * menu.length)]);  
	  }
	  else if(bob.length == 2 && bob[1] == "카테고리"){
		  var resMsg = "-밥추천 카테고리 목록-";
		  for(var i=0; i < arr_category.length; i++){
			  resMsg = resMsg + "\n" + arr_category[i];
		  }
		replier.reply(resMsg);
	  }
	  else if(bob.length == 2 && bob[1] != "카테고리"){
		  var checkCategory = false;
		  for(var i=0; i < arr_category.length; i++){
			  if(arr_category[i] == bob[1]){
				  checkCategory = true;
				  break;
			  }
		  }
		  
		  if(checkCategory == false){
			  replier.reply("잘못된 카테고리입니다.");  
		  }
		  else{
			  var lstMenu = Command.output(bob[1]);
			  var menu = lstMenu.split(" ");
		  
			  randomNo = Math.random();
			  
			  replier.reply("-추천 메뉴-\n" + menu[Math.floor(randomNo * menu.length)]);
		  }
	}else{
		replier.reply("잘못된 명령어입니다.");
	}
}








