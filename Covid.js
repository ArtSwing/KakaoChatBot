function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

    if (msg == "!전국날씨") {

        var wt = Utils.getWebText("https://m.search.naver.com/search.naver?query=날씨");

        var data2 = wt.split("전국날씨</strong>");

        var data3 = data2[1].split("특보");

        var data4 = data3[0].replace(/(<([^>]+)>)/g, "");

        data4 = data4.trim();

        data4 = data4.replace(/  /g, "");

        data4 = data4.replace(/도씨/g, "℃");

        data4 = data4.replace(/ /g, ", ");

        replier.reply("[현재 날씨]\n" + data4);

    }
	if (msg == "!코로나") {

			// data 크롤링 전역변수 
			var data = Utils.getWebText("http://ncov.mohw.go.kr");

			data =  data.replace(/<[^>]+>/g,"");

			// 국내발생
			data10 = data.split("국내발생")[1];

			data10 = data10.split("해외유입")[0];

			data10 = data10.trim();


			// 해외유입

			data11 = data.split("해외유입")[1];

			data11 = data11.split("실시간")[0];

			data11 = data11.trim();

			var total = parseInt(data10) + parseInt(data11);


			//지역별

			var su = data.split("서울")[1];
			su = su.split("부산")[0];
			su = su.trim();

			var bu = data.split("부산")[1];
			bu = bu.split("대구")[0];
			bu = bu.trim();


			var dg = data.split("대구")[1];
			dg = dg.split("인천")[0];
			dg = dg.trim();

			var ic = data.split("인천")[1];
			ic = ic.split("광주")[0];
			ic = ic.trim();

			var gw = data.split("광주")[1];
			gw = gw.split("대전")[0];
			gw = gw.trim();

			var dj = data.split("대전")[1];
			dj = dj.split("울산")[0];
			dj = dj.trim();

			var us = data.split("울산")[1];
			us = us.split("세종")[0];
			us = us.trim();

			var sj = data.split("세종")[1];
			sj = sj.split("경기")[0];
			sj = sj.trim();

			var ky = data.split("경기")[1];
			ky = ky.split("강원")[0];
			ky = ky.trim();

			var kw = data.split("강원")[1];
			kw = kw.split("충북")[0];
			kw = kw.trim();

			var cb = data.split("충북")[1];
			cb = cb.split("충남")[0];
			cb = cb.trim();

			var cn = data.split("충남")[1];
			cn = cn.split("전북")[0];
			cn = cn.trim();

			var jb = data.split("전북")[1];
			jb = jb.split("전남")[0];
			jb = jb.trim();

			var jn = data.split("전남")[1];
			jn = jn.split("경북")[0];
			jn = jn.trim();

			var kb = data.split("경북")[1];
			kb = kb.split("경남")[0];
			kb = kb.trim();

			var kn = data.split("경남")[1];
			kn = kn.split("제주")[0];
			kn = kn.trim();

			var jj = data.split("제주")[1];
			jj = jj.split("검역")[0];
			jj = jj.trim();

			var kum = data.split("검역")[1];
		kum = kum.split("지역")[0];
			kum = kum.trim();



	//오늘 날짜구하기
			var today = new Date();
			var month = today.getMonth() + 1;
			var date = today.getDate();

			var johap = (month + "월" + date +"일");


			replier.reply(johap +" 확진자 통계 [00시 기준]\n"+ "국내발생 : " + data10 +  "명\n"
				+ "해외유입 : " + data11 + "명\n"
				+ "총합 : " +total + "명\n\n"
				+ "[지역별 현황]\n"
				+ "서울 : " + su + "명\n"
				+ "부산 : " + bu + "명\n"
				+ "대구 : " + dg + "명\n"
				+ "인천 : " + ic + "명\n"
				+ "광주 : " + gw + "명\n"
				+ "대전 : " + dj + "명\n"
				+ "울산 : " + us + "명\n"
				+ "세종 : " + sj + "명\n"
				+ "경기 : " + ky + "명\n"
				+ "강원 : " + kw + "명\n"
				+ "충북 : " + cb + "명\n"
				+ "충남 : " + cn + "명\n"
				+ "전북 : " + jb + "명\n"
				+ "전남 : " + jn + "명\n"
				+ "경북 : " + kb + "명\n"
				+ "경남 : " + kn + "명\n"
				+ "제주 : " + jj + "명\n"
				+ "검역 : " + kum + "명"
				);
		}
	}

