const room_name=["실험실임"];

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) { 
	if (msg == "!실시간검색어" || msg =="!실검") { try {
	 var url = "https://www.naver.com/srchrank?frm=main&ag=all&gr=1&ma=-2&si=0&en=0&sp=0";
	 var json = Utils.getWebText(url); 
	 json = json.replace(/(<([^>]+)>)/ig, ""); 
	 var keywords = []; datas = JSON.parse(json); 
	 for (var i in datas["data"]) { 
	 	var keywordData = datas["data"][i] 
	 	var str = keywordData["rank"] + ". " + keywordData["keyword"];
	 	 keywords.push(str); 
	 	} 
		replier.reply(keywords.join("\n"));
		} catch (e) { 
			replier.reply("오류가 발생하였습니다.");
	 } 
	} 

	if(msg == "!명령어") {
		replier.reply("[명령어 모음]\n" + "!실시간검색어 또는 !실검\n" + "!코로나\n" + "!날씨 지역명\n" 
       + "!전국날씨\n" + "!미세먼지\n" + "!초미세먼지\n" + "!가사 찾을노래가사내용\n" +
        "!밥추천 카테고리\n" + "!일정(그전사only)");
	}
  }   


