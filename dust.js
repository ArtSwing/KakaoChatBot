function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
	if (msg == "!미세먼지") {
		var data = Utils.getWebText("https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blQ3&query=전국 미세먼지");
		data = data.split("미세먼지</strong>");
		data = data[1].split("단위");
		data = data[0].replace(/(<([^>]+)>)/g, "");
		data = data.trim();	
		data = data.replace(/ /g, "");
		replier.reply("[전국미세먼지 수치]\n" + data + "\n[0-30] : 좋음\n" + "[31-80] : 보통\n" + "[81-150] : 나쁨\n" + "151이상 : 매우나쁨");
	}
	if (msg == "!초미세먼지" ) {
		var data2 = Utils.getWebText("https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blQ3&query=전국 초미세먼지");
		data2 = data2.split("미세먼지</strong>");
		data2 = data2[1].split("단위");
		data2 = data2[0].replace(/(<([^>]+)>)/g, "");
		data2 = data2.trim();	
		data2 = data2.replace(/ /g, "");
		replier.reply("[전국 초미세먼지 수치]\n" + data2 + "\n[0-15] : 좋음\n" + "[15-35] : 보통\n" + "[36-75] : 나쁨\n" + "76이상 : 매우나쁨");
	}
}