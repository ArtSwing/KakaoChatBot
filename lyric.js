function getSongByLyric(name) {
    try {
        var url = "https://m.music.naver.com/search/search.nhn?target=lyric&query=" + name.replace(/ /g, "%20");
        var data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get();
        data = data.select("div.search_result").select("section").select("li");
        var result = [];
        for (var n = 0; n < data.size(); n++) {
            var dd = data.get(n);
            var title = dd.select("div.tit").text();
            var singer = dd.select("div.stit").text();
            result.push(singer + " - " + title);
        }
        return result;
    } catch (e) {
        return null;
    }
}

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    var cmd = msg.split(" ")[0];
    var data = msg.replace(cmd + " ", "");
    if (cmd == "!가사") {
        var result = getSongByLyric(data);
        if (result == null || result.length == 0) {
            replier.reply("검색 결과가 없습니다.");
        } else if (result.length > 3) {
            replier.reply("[검색 결과 " + result.length + "건]" + "\u200b".repeat(1000) + "\n\n" + result.join("\n\n"));
        } else {
            replier.reply("[검색 결과 " + result.length + "건]\n\n" + result.join("\n\n"));
        }

    }
}