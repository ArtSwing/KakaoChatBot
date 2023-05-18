const FS = FileStream; //파일스트림 정의
const LW = '\u200b'.repeat(500); //전체보기로 만들어줌
let prefix = '!' // 시작부호
let line = '-'.repeat(24);
Ll = "⎼".repeat(50);


function response(room, msg, sender, isGroupChat, replier) {
    
  //환율
   var ExRate = Utils.parse("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD").body().text();
   var exRate = JSON.parse(ExRate);
   var coin_info_obj_rate = exRate;
   var rate = coin_info_obj_rate[0].basePrice;

   //사전추가 (코인심볼등록)
   if (msg.startsWith("!사전추가 ") || msg.startsWith("사전추가 ")) {
        var commander = msg.split(" ")[1]; //명령어(부를이름)
        var symbol = msg.split(" ")[2]; //코인심볼명
        symbol = symbol.toUpperCase();
        var insertData = commander + "/" + symbol; // 메모장에 비트/BTC 이런식으로 저장됨
        path = "/sdcard/exchange/" + commander + ".json" //data 저장경로

        FS.write(path,insertData);
          try {
               replier.reply("사전추가가 완료되었습니다.");
          }
          catch(e) {
                replier("오류 발생, 사전추가에 실패했습니다.");
                Api.showToast(e);
                Api.makeNoti(e);
          }

    }

   //MEXC 거래소 코인 
  if(msg.startsWith("멕 ") || msg.startsWith("엠 ") || msg.startsWith("맥 ")) {
    var commander = msg.split(" ")[1]; // 부를 코인명
    path = "/sdcard/exchange/" + commander + ".json" //data 저장경로
    var coinData = FS.read(path); 
    if (coinData == undefined) {
      replier.reply("코인 심볼 사전정보가 없습니다.\n 먼저 !사전추가 명령어(부를이름) 코인심볼명(ex.BTC)\n등록 후 사용해주시기 바랍니다.");
      return;
    }

    var coinCommand = coinData.split("/")[0];
    var coinSymbol = coinData.split("/")[1];
    var coinJson = Utils.parse("https://api.mexc.com/api/v3/ticker/24hr?symbol=" + coinSymbol + "USDT").body().text();
    coinJson = JSON.parse(coinJson);

    var lastDollarPrice = coinJson.lastPrice;
     var startDollarPrice = coinJson.openPrice;
    var lastWonPrice = lastDollarPrice * rate;
    lastWonPrice = lastWonPrice.toFixed(0);

    lastDollarPrice = numberWithCommas(lastDollarPrice);
    lastWonPrice = numberWithCommas(lastWonPrice);

    var percentChange = (((lastDollarPrice - startDollarPrice) / startDollarPrice) * 100).toFixed(1);

    if(percentChange >= 0) {
       percentChange = "+ " + percentChange  + "%";
    } else {
       percentChange = percentChange  + "%";
    }

    replier.reply("MEXC 거래소 검색 결과 : \n" + "$" + lastDollarPrice + "\n원화 : " + lastWonPrice + "원\n" + "전일대비 : " + percentChange );
  }

   //OKX 
  if(msg.startsWith("옼 ")) {
    var commander = msg.split(" ")[1]; // 부를 코인명
    path = "/sdcard/exchange/" + commander + ".json" //data 저장경로
    var coinData = FS.read(path); 
    if (coinData == undefined) {
      replier.reply("코인 심볼 사전정보가 없습니다.\n 먼저 !사전추가 명령어(부를이름) 코인심볼명(ex.BTC)\n등록 후 사용해주시기 바랍니다.");
      return;
    }

    var coinCommand = coinData.split("/")[0];
    var coinSymbol = coinData.split("/")[1];
    var coinJson = Utils.parse("https://www.okx.com/api/v5/market/index-tickers?instId=" + coinSymbol + "-USDT").body().text();
    coinJson = JSON.parse(coinJson);

    var lastDollarPrice = coinJson.data[0].idxPx;
    var startDollarPrice = coinJson.data[0].open24h;
    var lastWonPrice = lastDollarPrice * rate;
    lastWonPrice = lastWonPrice.toFixed(0);

    var percentChange = (((lastDollarPrice - startDollarPrice) / startDollarPrice) * 100).toFixed(1);

      if(percentChange >= 0) {
       percentChange = "▲ + " + percentChange  + "%";
    } else {
       percentChange = "▼ " +percentChange  + "%";
    }

    lastDollarPrice = numberWithCommas(lastDollarPrice);
    lastWonPrice = numberWithCommas(lastWonPrice);

    replier.reply("OKX 거래소 검색 결과 : \n" + "$" + lastDollarPrice + "\n원화 : " + lastWonPrice + "원\n" + "전일대비 : " + percentChange);
  }
}
   function numberWithCommas(x) {
     if (x == 0 || isNaN(x)) return 0;
 
     var reg = /(^[+-]?\d+)(\d{3})/;
     var n = (x + '');
 
     while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
 
     return n;
 }