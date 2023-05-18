const { KakaoLinkClient }  = require('kakaolink');
const Kakao = new KakaoLinkClient("253cbf1dc2aae4162169d1cbf5f85ac8", "https://opensea.io");
Kakao.login('hbyoo96@gmail.com', 'rlatjdrms1@@');

const arr_room = ["민재", "BOT", "랩실", "워렌존버핏", "실험실임","밥봇체험관","재문","세이프머니","트론","암호","포니","제주","파랑새","피린","희단","솔피","정보를다오","근면성실","꿀통","근면성실2","생프","수확","갓물주"];
const FS = FileStream; //파일스트림 정의
const LW = '\u200b'.repeat(500); //전체보기로 만들어줌
let prefix = '!' // 시작부호
let line = '-'.repeat(24);
Ll = "⎼".repeat(50);

//한영구분 특수기호 구분
var check_num = /[0-9]/;    // 숫자 
var check_eng = /[a-zA-Z]/;    // 문자 
var check_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
var check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크

    var eth = "";
    var eth_dollar = Utils.getWebText(
        "https://api.binance.com/api/v1/ticker/24hr?symbol=ETHUSDT"
    );
    var eth_json = eth_dollar
        .replace(/(<([^>]+)>)/gi, "")
        .trim();
    var eth_obj_dollar = JSON.parse(eth_json);
    eth = eth_obj_dollar.lastPrice;

    var matic = "";
    var matic_dollar = Utils.getWebText(
        "https://api.binance.com/api/v1/ticker/24hr?symbol=MATICUSDT"
    );
    var matic_json = matic_dollar
        .replace(/(<([^>]+)>)/gi, "")
        .trim();
    var matic_obj_dollar = JSON.parse(matic_json);
    matic = matic_obj_dollar.lastPrice;




    var klay = "";
    var klay_dollar = Utils.parse("https://api.bithumb.com/public/ticker/KLAY").body().text();
    var klay_json = klay_dollar.replace(/(<([^>]+)>)/gi, "").trim();
    var klay_obj_dollar = JSON.parse(klay_json);
    klay = klay_obj_dollar.data.closing_price;

    var sol = "";
    var sol_dollar = Utils.getWebText(
        "https://api.binance.com/api/v1/ticker/24hr?symbol=SOLUSDT"
    );
    var sol_json = sol_dollar
        .replace(/(<([^>]+)>)/gi, "")
        .trim();
    var sol_obj_dollar = JSON.parse(sol_json);
    sol = sol_obj_dollar.lastPrice;

   //환율
   var ExRate = Utils.parse("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD").body().text();
   var exRate = JSON.parse(ExRate);
   var coin_info_obj_rate = exRate;
   var rate = coin_info_obj_rate[0].basePrice;

   //Gas
   var eth_gas = Utils.parse("https://etherchain.org/api/gasnow").body().text();
   var eth_obj = JSON.parse(eth_gas);
   var slow = eth_obj.data.slow;
   slow = (slow * 0.000000001).toFixed(3);
   var standard = eth_obj.data.standard;
   standard = (standard * 0.000000001).toFixed(3);
   var fast = eth_obj.data.fast;
   fast = (fast* 0.000000001).toFixed(3);

    function numberWithCommas(x) {
     if (x == 0 || isNaN(x)) return 0;
 
     var reg = /(^[+-]?\d+)(\d{3})/;
     var n = (x + '');
 
     while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
 
     return n;
 }


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (arr_room.indexOf(room) == -1) {
        return false;
    }

  
 /*  if (msg == "!가스" || msg =="!기위" || msg =="기위" || msg =="가스") {
          var total = "";
          var coin1 = org.jsoup.Jsoup.connect("https://etherscan.io/gastracker").get().select("div.text-secondary").get(2).text();
          total += "이더리움 가스 비용(Low) : \n" + coin1 + "\n\n";
          var coin2 = org.jsoup.Jsoup.connect("https://etherscan.io/gastracker").get().select("div.text-secondary").get(3).text();
          total += "이더리움 가스 비용(Average) : \n" + coin2 + "\n\n";
          var coin3 = org.jsoup.Jsoup.connect("https://etherscan.io/gastracker").get().select("div.text-secondary").get(4).text();
          total += "이더리움 가스 비용(High) : \n" + coin3;
          replier.reply(total);
      }*/
      
  if(msg=="가스" || msg =="기위") {
    // replier.reply("https://etherscan.io/gastracker" + "\n 사이트 오류로 임시방편 쓰십시오");
        var gas_temp = Utils.parse("https://coinmarketcap.com/ko/charts/").body().text(); 
            gas_temp = gas_temp.split("ETH 가스:")[1].split("가상자산")[0]; 
            replier.reply("💥ETH 가스비💥 :" + gas_temp);
  }
      
       if (msg == "!코인") {
              var coin1 = org.jsoup.Jsoup.connect("https://coinmarketcap.com/ko").get().select("a.cmc-link").get(0).text();
              var coin2 = org.jsoup.Jsoup.connect("https://coinmarketcap.com/ko").get().select("a.cmc-link").get(1).text();
              var coin3 = "\n\n정보 제공 : 코인마켓캡";
              replier.reply("암호화폐 갯수 : " + coin1 + "\n" + "거래소 갯수 : " + coin2 + coin3);
          }
      
          if (msg == "!시총") {
              var coin1 = org.jsoup.Jsoup.connect("https://coinmarketcap.com/ko").get().select("a.cmc-link").get(2).text();
              coin1 += "\n\n정보 제공 : 코인마켓캡";
              replier.reply("<시가 총액>\n" + coin1);
          }
      
          if (msg == "!거래량") {
              var coin1 = org.jsoup.Jsoup.connect("https://coinmarketcap.com/ko").get().select("a.cmc-link").get(3).text();
              coin1 += "\n\n정보 제공 : 코인마켓캡";
              replier.reply("<24시간 거래량>\n" + coin1);
          }     
                 
      


  if (msg =="!사용법" || msg =="!설명서" || msg =="!명령어") {
     replier.reply("--Bot 2.0 사용 설명서--\n"+
                 "Made By : 워렌존버핏\n"+
                 "후원주소 : 0xb6Bcf9f1545fDFbCf6A76a88548226AdB62999b2\n"+
                 "(카이카스주소,0.1클이라도 감사합니다.)\n"+
                 "늪 NFT이름(한글로) : NFT 간략정보 \n"+
                 "옾 NFT이름(한글로) : NFT 상세정보 \n"+
                 "!등록 NFT이름 컬렉션명 : NFT 등록\n"+
                 "/코인이름 (거래소명) : 코인 가격표기\n"+
                 "!김프 코인이름 : 업비트 <->바낸 김치프리미엄 비교\n"+
                 "!후원 : 후원계좌\n"+
                 "!코로나 : 코로나 확진자수 \n"+
                 "!일몰일출 : 금일 일출 일몰시간\n"+
                 "!위성 : 대한민국 위성사진 표기\n"+
                 "!검색 검색할내용 : 네이버 검색창 표기\n"+
                 "!주식 회사이름 : 해당 회사 주식 가격 및 정보 표기\n"+
                 "!미세먼지 : 수도권 지역 미세먼지 지수 표기\n"+
                 "!날씨 지역명 : 해당 지역 날씨 표기\n"+
                 "점심추천, 저녁추천, 야식추천\n" +
                 "계산 100 이더 :\n" + "100 이더리움을 원화 환산\n" +
                 "역산 10000 이더 :\n" + "현금 만원을 이더로 역산\n" +
                 "시간 : PST,EST,UTC,KST 시간을 보여줍니다.\n"+
                 "!공포 : 두나무 공포탐욕지수를 보여줍니다.\n" +
                 "!$100 : 100달러를 한화로 환산해줍니다.\n" +
                 "가스 , 기위 : \n" + "ETH Gas를 보여줍니다.\n" + 
                 "시간변환 e 7/22 05:00 -> 한국시간으로 변환해줍니다.\n" +
                 "환율 달러(엔화 등등) : \n" + "현재 환율을 보여줍니다."
                );
  }
  if (msg =="!후원" || msg =="!계좌" || msg=="!후원주소") {
    replier.reply("후원주소 : 0xb6Bcf9f1545fDFbCf6A76a88548226AdB62999b2\n"+
                 "(카이카스주소,0.1클이라도 감사합니다.)");
  }
  //메콩코인
  if (msg =="!메콩코인" || msg =="!MKC" || msg =="!mkc" || msg =="!콩즈코인") {
  
     var mkcData = Utils.parse("https://tothem.pro/notLogin/tokenApi_row.json?coin_name=mkc").body().text();
     var mkcPrice = JSON.parse(mkcData).price;  
          
     var dollar = parseFloat(mkcPrice).toFixed(5);
     var krw = (rate * dollar).toFixed(5);                            
     
     replier.reply("MKC : "+krw+"원");
  
    }
    
    //메콩코인
  if (msg =="!무돌") {
  
     var mudolData = Utils.parse("https://tothem.pro/notLogin/tokenApi_row.json?coin_name=mudol").body().text();
     var mudolPrice = JSON.parse(mudolData).price;  
          
     var dollar = parseFloat(mudolPrice).toFixed(5);
     var krw = (rate * dollar).toFixed(5);                            
     
     replier.reply("MUDOL : "+krw+"원");
  
    }
  
    //쉽팜코인 (마드)
  if (msg =="!쉽팜코인" || msg =="!MARD" || msg =="!mard" || msg =="!마드") {
     replier.reply("https://dexata.kr/?tokenA=0x79bb4d71f6c168531a259dd6d40a8d5de5a34427&tokenB=");
     //body > app-root > route-index > div > div > trading-view-chart > div.pc > div > div.flex > div:nth-child(2)
    }
    
    //SST
    if (msg =="!SST" || msg =="!슈퍼소울" || msg =="!슈퍼소울토큰" || msg =="!슈소") {
     replier.reply("https://dexata.kr/?tokenA=0x338d7933c367e49905c06f3a819cd60d541c9067&tokenB=");
    }
    
    //레이
    if (msg =="!레이" || msg =="LAY") {
     replier.reply("https://www.geckoterminal.com/polygon_pos/pools/0xc8151b4f073f5828d088334995536728b5a4957c"); 
    }
    
    //트레이서
    if (msg =="!트레이서" || msg =="!트레") {
     replier.reply("https://dexscreener.com/polygon/0x7399c6dba80b6f6a36a8f6f20053a1a9a615dab9"); 
    }
    
    //슈웤
    if (msg =="!슈퍼워크" || msg =="!슈웤") {
     replier.reply("https://dexata.kr/?tokenA=0x976232eb7eb92287ff06c5d145bd0d1c033eca58&tokenB="); 
    }

    //SKZ
    if (msg =="!스니커즈" || msg =="!스니" || msg =="!skz" || msg =="!SKZ") {
     replier.reply("https://dexata.kr/#/?tokenA=0x9a6469aac7cd70385bdca6fa9e9356acec9c5b16&tokenB="); 
    }
    
    //오브
    if (msg =="!오브" || msg =="ORB") {
     replier.reply("https://www.geckoterminal.com/polygon_pos/pools/0x2dab440dcf557e306ee47e288cf57ccd154e2f64");
    }
    
    //녹스
    if (msg =="!녹스" || msg =="NOX") {
     replier.reply("https://dexata.kr/#/?tokenA=0x5166fa1acba89e5e0de27841a1110b7f9ac112da&tokenB=&interval=60");
    }


    //그라운드
    if (msg =="!그라운드" || msg =="!grnd" || msg =="!GRND") {
     replier.reply("https://www.gate.io/trade/GRND_USDT");
    }
  var collection = "";
  var commander = "";
  var path = "/sdcard/opensea/" + commander + ".json" //data 저장경로

    if (msg.startsWith("!등록 ")) {
      commander = msg.split(" ")[1]; //명령어
        collection = msg.split(" ")[2]; //오픈시 컬렉션주소
        var insertData = commander + "/" + collection; // 메모장에 도사클/doge-sound-club 이런식으로 저장됨
        path = "/sdcard/opensea/" + commander + ".json" //data 저장경로

        FS.write(path,insertData);
          try {
               replier.reply("NFT 등록이 완료되었습니다.\n 명령어 :" + commander + "\n등록 컬렉션 : " + collection);
          }
          catch(e) {
                replier("오류 발생, 등록에 실패했습니다.");
                Api.showToast(e);
              Api.makeNoti(e);
          }

    }


  if(msg.startsWith("!삭제 ")) {
    commander = msg.split(" ")[1]; //명령어
    path = "/sdcard/opensea/" + commander + ".json" //data 저장경로
    FS.remove(path);
          try {
              replier.reply(commander + "를(을) 삭제했습니다.");
          }
          catch(e) {
                replier("오류 발생, 삭제 실패했습니다.");
                Api.showToast(e);
              Api.makeNoti(e);
          }
  }

  if(msg.startsWith("!옾 ") || msg.startsWith("옾 ")) {
    commander = msg.split(" ")[1];
    path = "/sdcard/opensea/" + commander + ".json" //data 저장경로
    var nftData = FS.read(path); // 도사클/DOGE-SOUND-CLUB 형식
    if (nftData == undefined) {
      replier.reply("NFT 등록정보가 없습니다.\n 먼저 !등록 명령어 오픈시컬렉션명\n등록 후 사용해주시기 바랍니다.");
      return;
    }
   

    var nftCommand = nftData.split("/")[0];
    var nftCollection = nftData.split("/")[1];

    var imageJson = Utils.parse("https://api.opensea.io/api/v1/collection/" + nftCollection).body().text();
    var nftJson = Utils.parse("https://api.opensea.io/api/v1/collection/" + nftCollection + "/stats?format=json").body().text();


    var opensea_name = JSON.parse(imageJson).collection.name; //오픈시 등록명
    var image = JSON.parse(imageJson).collection.banner_image_url; // 이미지
    var total_supply = JSON.parse(nftJson).stats.total_supply; // 발행량
    total_supply = numberWithCommas(total_supply); 
    var one_day_sales = JSON.parse(nftJson).stats.one_day_sales; // 하루거래량
    one_day_sales = numberWithCommas(one_day_sales);
    var total_sales = JSON.parse(nftJson).stats.total_sales; // 총거래량
    total_sales = total_sales.toFixed(0);
    total_sales = numberWithCommas(total_sales);
    var floor_price = JSON.parse(nftJson).stats.floor_price;   // 이더 바닥가
    var floor_price_klay = (floor_price * eth) / (klay / rate);  //클레이튼 환산 바닥가
    var won_floor_price = (floor_price * eth) * rate;           //원화 환산 바닥가



     floor_price = floor_price.toFixed(4);
     floor_price_klay = floor_price_klay.toFixed(1);
     floor_price_klay = numberWithCommas(floor_price_klay);
     won_floor_price = won_floor_price.toFixed(0);
     won_floor_price = numberWithCommas(won_floor_price);         //3자리 콤마


    var market_cap = JSON.parse(nftJson).stats.market_cap; //시총
    market_cap = market_cap.toFixed(2);
    market_cap = numberWithCommas(market_cap);

    var num_owners = JSON.parse(nftJson).stats.num_owners; //홀더수

    num_owners = numberWithCommas(num_owners);

   Kakao.sendLink(room,{
        "template_id" : 80461,
        "template_args" : {   
          "image_url" : image,
          "opensea_name" : opensea_name,
          "total_supply" : total_supply,
          "one_day_sales" : one_day_sales,
          "total_sales" : total_sales,
          "floor_price" : floor_price,
          "floor_price_klay" : floor_price_klay,
          "won_floor_price" : won_floor_price,
          "collection" : nftCollection,
          "market_cap" : market_cap,
          "num_owners" : num_owners
        },
      }, "custom");
  }



  //사진 없이 나오기
  if(msg.startsWith("!늪 ") || msg.startsWith("늪 ")) {
    commander = msg.split(" ")[1];
    path = "/sdcard/opensea/" + commander + ".json" //data 저장경로
    var nftData = FS.read(path); // 도사클/DOGE-SOUND-CLUB 형식
    if (nftData == undefined) {
      replier.reply("NFT 등록정보가 없습니다.\n 먼저 !등록 명령어 오픈시컬렉션명\n등록 후 사용해주시기 바랍니다.");
      return;
    }
   

    var nftCommand = nftData.split("/")[0];
    var nftCollection = nftData.split("/")[1];
    var nftJson = Utils.parse("https://api.opensea.io/api/v1/collection/" + nftCollection + "/stats?format=json").body().text();

    var total_supply = JSON.parse(nftJson).stats.total_supply; // 발행량
    total_supply = numberWithCommas(total_supply); 
    var one_day_sales = JSON.parse(nftJson).stats.one_day_sales; // 하루거래량
    one_day_sales = numberWithCommas(one_day_sales);
    var total_sales = JSON.parse(nftJson).stats.total_sales; // 총거래량
    total_sales = total_sales.toFixed(2);
    var floor_price = JSON.parse(nftJson).stats.floor_price;   // 이더 바닥가
    var floor_price_klay = (floor_price * eth) / (klay / rate);  //클레이튼 환산 바닥가
    var won_floor_price = (floor_price * eth) * rate;           //원화 환산 바닥가



     floor_price = floor_price.toFixed(4);
     floor_price_klay = floor_price_klay.toFixed(1);
     floor_price_klay = numberWithCommas(floor_price_klay);
     won_floor_price = won_floor_price.toFixed(0);
     won_floor_price = numberWithCommas(won_floor_price);         //3자리 콤마


    var market_cap = JSON.parse(nftJson).stats.market_cap; //시총
    market_cap = market_cap.toFixed(2);
    market_cap = numberWithCommas(market_cap);

    var num_owners = JSON.parse(nftJson).stats.num_owners; //홀더수

    num_owners = numberWithCommas(num_owners);

    replier.reply("NFT : " + nftCommand +
     "\nETH 바닥가 : " + floor_price + 
     "ETH\nKLAY 바닥가 : " + floor_price_klay +
     "KLAY\n원화 바닥가 : " + won_floor_price +"원");
  }


  //솔라나 가격환산 오픈시 
    if(msg.startsWith("!솔 ") || msg.startsWith("솔 ")) {
    commander = msg.split(" ")[1];
    path = "/sdcard/opensea/" + commander + ".json" //data 저장경로
    var nftData = FS.read(path); // 도사클/DOGE-SOUND-CLUB 형식
    if (nftData == undefined) {
      replier.reply("NFT 등록정보가 없습니다.\n 먼저 !등록 명령어 오픈시컬렉션명\n등록 후 사용해주시기 바랍니다.");
      return;
    }
   

    var nftCommand = nftData.split("/")[0];
    var nftCollection = nftData.split("/")[1];

    var imageJson = Utils.parse("https://api.opensea.io/api/v1/collection/" + nftCollection).body().text();
    var nftJson = Utils.parse("https://api.opensea.io/api/v1/collection/" + nftCollection + "/stats?format=json").body().text();

    var image = JSON.parse(imageJson).collection.banner_image_url; // 이미지
    var total_supply = JSON.parse(nftJson).stats.total_supply; // 발행량
    total_supply = numberWithCommas(total_supply); 
    var one_day_sales = JSON.parse(nftJson).stats.one_day_sales; // 하루거래량
    one_day_sales = numberWithCommas(one_day_sales);
    var total_sales = JSON.parse(nftJson).stats.total_sales; // 총거래량
    var total_sales_sol = (total_sales * eth) / sol;
    total_sales_sol = total_sales_sol.toFixed(2);
    total_sales_sol = numberWithCommas(total_sales_sol);
    var floor_price = JSON.parse(nftJson).stats.floor_price;   // 이더 바닥가
    var floor_price_sol = (floor_price * eth) / sol;  // 솔라나 환산 바닥가
    var won_floor_price = (floor_price * eth) * rate;           //원화 환산 바닥가
    var opensea_name = JSON.parse(imageJson).collection.name; //오픈시 등록명



     floor_price = floor_price.toFixed(4);
     floor_price_sol = floor_price_sol.toFixed(1);
     floor_price_sol = numberWithCommas(floor_price_sol);
     won_floor_price = won_floor_price.toFixed(0);
     won_floor_price = numberWithCommas(won_floor_price);         //3자리 콤마


    var market_cap = JSON.parse(nftJson).stats.market_cap; //시총
    market_cap = market_cap.toFixed(2);
    market_cap = numberWithCommas(market_cap);

    var num_owners = JSON.parse(nftJson).stats.num_owners; //홀더수

    num_owners = numberWithCommas(num_owners);

   Kakao.sendLink(room,{
        "template_id" : 80462,
        "template_args" : {   
          "image_url" : image,
          "opensea_name" : opensea_name,
          "total_supply" : total_supply,
          "one_day_sales" : one_day_sales,
          "total_sales_sol" : total_sales_sol,
          "floor_price_sol" : floor_price_sol,
          "won_floor_price" : won_floor_price,
          "collection" : nftCollection,
          "market_cap" : market_cap,
          "num_owners" : num_owners
        },
      }, "custom");
  }

    // 폴리곤 매틱 오픈시 
    if(msg.startsWith("!폴 ") || msg.startsWith("폴 ")) {
    commander = msg.split(" ")[1];
    path = "/sdcard/opensea/" + commander + ".json" //data 저장경로
    var nftData = FS.read(path); // 도사클/DOGE-SOUND-CLUB 형식
    if (nftData == undefined) {
      replier.reply("NFT 등록정보가 없습니다.\n 먼저 !등록 명령어 오픈시컬렉션명\n등록 후 사용해주시기 바랍니다.");
      return;
    }
   

    var nftCommand = nftData.split("/")[0];
    var nftCollection = nftData.split("/")[1];

    var imageJson = Utils.parse("https://api.opensea.io/api/v1/collection/" + nftCollection).body().text();
    var nftJson = Utils.parse("https://api.opensea.io/api/v1/collection/" + nftCollection + "/stats?format=json").body().text();

    var image = JSON.parse(imageJson).collection.banner_image_url; // 이미지
    var total_supply = JSON.parse(nftJson).stats.total_supply; // 발행량
    total_supply = numberWithCommas(total_supply); 
    var one_day_sales = JSON.parse(nftJson).stats.one_day_sales; // 하루거래량
    one_day_sales = numberWithCommas(one_day_sales);
    var total_sales = JSON.parse(nftJson).stats.total_sales; // 총거래량
    var total_sales_matic = (total_sales * eth) / matic;
    total_sales_matic = total_sales_matic.toFixed(2);
    total_sales_matic = numberWithCommas(total_sales_matic);
    var floor_price = JSON.parse(nftJson).stats.floor_price;   // 이더 바닥가
    var floor_price_matic = (floor_price * eth) / matic;      // 폴리곤 환산 바닥가
    var won_floor_price = (floor_price * eth) * rate;         //원화 환산 바닥가
    var opensea_name = JSON.parse(imageJson).collection.name; //오픈시 등록명



     floor_price = floor_price.toFixed(4);
     floor_price_matic = floor_price_matic.toFixed(1);
     floor_price_matic = numberWithCommas(floor_price_matic);
     won_floor_price = won_floor_price.toFixed(0);
     won_floor_price = numberWithCommas(won_floor_price);         //3자리 콤마


    var market_cap = JSON.parse(nftJson).stats.market_cap; //시총
    market_cap = market_cap.toFixed(2);
    market_cap = numberWithCommas(market_cap);

    var num_owners = JSON.parse(nftJson).stats.num_owners; //홀더수

    num_owners = numberWithCommas(num_owners);

   Kakao.sendLink(room,{
        "template_id" : 82701,
        "template_args" : {   
          "image_url" : image,
          "opensea_name" : opensea_name,
          "total_supply" : total_supply,
          "one_day_sales" : one_day_sales,
          "total_sales_matic" : total_sales_matic,
          "floor_price_matic" : floor_price_matic,
          "won_floor_price" : won_floor_price,
          "collection" : nftCollection,
          "market_cap" : market_cap,
          "num_owners" : num_owners
        },
      }, "custom");
  }

   //매직에덴 등록 
   if (msg.startsWith("!메등록 ") || msg.startsWith("!매등록 ")) {
      commander = msg.split(" ")[1]; //명령어
        collection = msg.split(" ")[2]; //오픈시 컬렉션주소
        var insertData = commander + "/" + collection; // 메모장에 도사클/doge-sound-club 이런식으로 저장됨
        path = "/sdcard/magic/" + commander + ".json" //data 저장경로

        FS.write(path,insertData);
          try {
               replier.reply("NFT 등록이 완료되었습니다.\n 명령어 :" + commander + "\n등록 컬렉션 : " + collection);
          }
          catch(e) {
                replier("오류 발생, 등록에 실패했습니다.");
                Api.showToast(e);
                Api.makeNoti(e);
          }

    }

 //매직에덴 삭제
    if(msg.startsWith("!메삭제 ") || msg.startsWith("!매삭제 ")) {
    commander = msg.split(" ")[1]; //명령어
    path = "/sdcard/magic/" + commander + ".json" //data 저장경로
    FS.remove(path);
          try {
              replier.reply(commander + "를(을) 삭제했습니다.");
          }
          catch(e) {
                replier("오류 발생, 삭제 실패했습니다.");
                Api.showToast(e);
               Api.makeNoti(e);
          }
  }

  //솔라나 메직에덴
    if(msg.startsWith("!메 ") || msg.startsWith("메 ")) {
    commander = msg.split(" ")[1];
    path = "/sdcard/magic/" + commander + ".json" //data 저장경로
    var nftData = FS.read(path); // 도사클/DOGE-SOUND-CLUB 형식
    if (nftData == undefined) {
      replier.reply("NFT 등록정보가 없습니다.\n 먼저 !메등록 명령어 매직에덴 컬렉션명\n등록 후 사용해주시기 바랍니다.");
      return;
    }
   
    var nftCommand = nftData.split("/")[0];
    var nftCollection = nftData.split("/")[1];

    var nftJson = Utils.parse("https://api-mainnet.magiceden.dev/v2/collections/" + nftCollection).body().text();
        nftJson = nftJson.replace(/(<([^>]+)>)/gi, "").trim();

    var symbol = JSON.parse(nftJson).name;     // 컬렉션명
    var image = JSON.parse(nftJson).image; // 이미지
    var total_sales = JSON.parse(nftJson).volumeAll; // 총거래량
    var total_sales_sol = (total_sales * 0.000000001);
    total_sales_sol = total_sales_sol.toFixed(2);
    total_sales_sol = numberWithCommas(total_sales_sol);

    var avg_price = JSON.parse(nftJson).avgPrice24hr;   //24시간 평균가
        avg_price = (avg_price * 0.000000001).toFixed(1);
        avg_price = numberWithCommas(avg_price);

    var floor_price = JSON.parse(nftJson).floorPrice;   // 바닥가
    var floor_price_sol = (floor_price * 0.000000001);  // 솔라나 바닥가
    var won_floor_price = floor_price_sol * rate * sol;   //원화 환산 바닥가

   floor_price_sol = floor_price_sol.toFixed(1);
   floor_price_sol = numberWithCommas(floor_price_sol);
   won_floor_price = won_floor_price.toFixed(0);
   won_floor_price = numberWithCommas(won_floor_price);         //3자리 콤마


   Kakao.sendLink(room,{
        "template_id" : 80463,
        "template_args" : {   
          "image_url" : image,
          "symbol"    : symbol,
          "total_sales_sol" : total_sales_sol,
          "floor_price_sol" : floor_price_sol,
          "won_floor_price" : won_floor_price,
          "collection" : nftCollection,
          "avg_price"  : avg_price
        },
      }, "custom");
  }

  if(msg.startsWith("계산 "))  {

    var crypto_cnt = msg.split(" ")[1];
    var crypto = msg.split(" ")[2];

    if(crypto =="솔" || crypto =="솔라나") {
      crypto = "SOL"
    } else if (crypto =="이더" || crypto =="이더리움") {
      crypto = "ETH"
    } else if (crypto =="에이다") {
      crypto = "ADA"
    } else if (crypto =="클" || crypto =="클튼" || crypto =="클레이" || crypto =="클레이튼" || crypto =="ㅋ") {
      crypto = "KLAY"
    } else if (crypto =="매틱" || crypto == "폴리곤" || crypto =="메틱") {
      crypto = "MATIC"
    } else if (crypto =="테더" || crypto == "달러") {
      crypto = "BUSD"
    } else if (crypto =="매직") {
      crypto = "MAGIC"
    } else if (crypto =="비트") {
      crypto = "BTC"
    } else if (crypto =="수이") {
      crypto = "SUI"
    }
    else if (check_kor.test(crypto) == true) {
      replier.reply("이더,솔,에이다,클튼 제외 코인의 Symbol 명을 입력해주세요." +"\n" +"Ex) 비트 = BTC")
    } 
    else {
      crypto = crypto.toUpperCase();
    }
    
    
    var crypto_dollar = Utils.getWebText(
        "https://api.binance.com/api/v1/ticker/24hr?symbol=" + crypto + "USDT"
    );
    var crypto_json = crypto_dollar
        .replace(/(<([^>]+)>)/gi, "")
        .trim();
    var crypto_obj_dollar = JSON.parse(crypto_json);
    var crypto_price = crypto_obj_dollar.lastPrice;
    var dollar_crypto_price = crypto_price;
    var won_crypto_price = dollar_crypto_price * rate;

    dollar_crypto_price = Number(dollar_crypto_price).toFixed(1);
    won_crypto_price = Number(won_crypto_price).toFixed(0);

    replier.reply(numberWithCommas(won_crypto_price * crypto_cnt) +"원");
  }

  if(msg.startsWith("역산 "))  {

    var input_won = msg.split(" ")[1];
    var crypto = msg.split(" ")[2];

    if(crypto =="솔" || crypto =="솔라나") {
      crypto = "SOL"
    } else if (crypto =="이더" || crypto =="이더리움") {
      crypto = "ETH"
    } else if (crypto =="에이다") {
      crypto = "ADA"
    } else if (crypto =="클" || crypto =="클튼" || crypto =="클레이" || crypto =="클레이튼" || crypto =="ㅋ") {
      crypto = "KLAY"
    } else if (crypto =="테더" || crypto == "달러") {
      crypto = "BUSD"
    } else if (crypto =="매틱" || crypto == "폴리곤" || crypto =="메틱") {
      crypto = "MATIC"
    } else if (crypto =="븐브") {
      crypto = "BNB"
    } else if (crypto =="비트") {
      crypto = "BTC"
    } else if (crypto =="수이") {
      crypto = "SUI"
    }
    else if (check_kor.test(crypto) == true) {
      replier.reply("이더,솔,에이다,클튼 제외 코인의 Symbol 명을 입력해주세요." +"\n" +"Ex) 비트 = BTC\n" + "바이낸스에 있는 코인만 조회 가능합니다.")
    } 
    else {
      crypto = crypto.toUpperCase();
    }
    
    
    var crypto_dollar = Utils.getWebText(
        "https://api.binance.com/api/v1/ticker/24hr?symbol=" + crypto + "USDT"
    );
    var crypto_json = crypto_dollar
        .replace(/(<([^>]+)>)/gi, "")
        .trim();
    var crypto_obj_dollar = JSON.parse(crypto_json);
    var crypto_price = crypto_obj_dollar.lastPrice;
    var dollar_crypto_price = crypto_price;
    var won_crypto_price = dollar_crypto_price * rate;

    dollar_crypto_price = Number(dollar_crypto_price).toFixed(1);
    won_crypto_price = Number(won_crypto_price).toFixed(0);

    replier.reply(numberWithCommas((input_won / won_crypto_price).toFixed(4)) + crypto);
  }



}
