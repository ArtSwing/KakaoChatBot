var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const room_name = ["애들방","랩실","실험실임","로아"];

function read(){ //파일 읽기 함수 제작
		var b = new java.io.File(sdcard+"/비트코인/flat.txt");
		if(!(b.exists())) return null; //만약 읽을 파일이 없다면 null 변환
		var c=new java.io.FileInputStream(b); 
		var d=new java.io.InputStreamReader(c);
		var e=new java.io.BufferedReader(d);
		var f=e.readLine();
		var g="";
		while((g=e.readLine())!=null){
		 f+="\n"+g; //\ = 역슬래쉬 → 줄바꿈 표시
		}
		c.close();
		d.close();
		e.close();
		return f.toString(); //읽은 파일 내용을 반환
    }
	
function divide(num) {
    var parts = num.toString().split("."); return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}
function tofixed(num, x) {
    return (isNaN(num) ? '소수를 입력해주세요' : num.toFixed(x))
}
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
	
 if(room_name.indexOf(room) != -1 && msg.indexOf('!플랫 ') != -1){
		var message = msg.split(' ')[1];
		let data = read();
		let data2 = data.split("\n");
		let data4 = "";
		for(var i = 0; i < data2.length; i++) {
			if(data2[i].indexOf(message) >= 0) {
				let data3 = data2[i].split(",");
				data4 = data3[1];
				break;
			}
		}
   
		 var data_temp = Utils.getWebText("https://www.flata.exchange/out/api/getTickers?symbol=" + data4);

   var data5_json = data_temp.replace(/(<([^>]+)>)/gi, "").trim();
 
    const data5 = JSON.parse(data5_json);       
    
		     opening_price = data5.list[0].current; //현재가격
        high_price = data5.list[0].high; //고가
        low_price = data5.list[0].low;  //저가
        change = data5.list[0].dayChgSign; //전일대비 상승 OR 하강 비교
       
        signed_change_price = data5.list[0].dayChg; //전일대비 상승 하강 금액
        signed_change_rate = data5.list[0].dayChgRate; //전일대비 상승 하강률
 
		     replier.reply("[" + message+ "]\n현재 가격 : " + divide(opening_price)  + "\n고가 : " + divide(high_price) + "\n저가 : " + divide(low_price) + "\n전일대비 금액 : "+ change + " " + divide(signed_change_price) + "(" + signed_change_rate +"%)");
 }
}
