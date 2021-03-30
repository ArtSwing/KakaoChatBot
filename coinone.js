/*////////////////////////////////////
  전역변수 설정 부분입니다.
  histort - 오태윤 20210326 변수 최초생성
        -
////////////////////////////////////*/
const arr_room = ["민재","BOT"];
const coin = {
    "비트코인": {"symbol":"btc"},
    "밀크": {"symbol":"mlk"},
    "캔디 프로토콜": {"symbol":"cad"},
    "비비": {"symbol":"vivi"},
    "트라이엄프엑스": {"symbol":"trix"},
    "더그래프": {"symbol":"grt"},
    "토로커스": {"symbol":"torocus"},
    "스시": {"symbol":"sushi"},
    "퀸트북": {"symbol":"qtbk"},
    "셀럽 플러스": {"symbol":"celeb"},
    "크립토뱅크": {"symbol":"cbank"},
    "리니어 파이낸스": {"symbol":"lina"},
    "아발란체": {"symbol":"avax"},
    "베이직": {"symbol":"basic"},
    "도니 파이낸스": {"symbol":"don"},
    "두카토": {"symbol":"ducato"},
    "메티스": {"symbol":"mts"},
    "인젝티브 프로토콜": {"symbol":"inj"},
    "핸디": {"symbol":"handy"},
    "엑시 인피니티": {"symbol":"axs"},
    "비트코인 캐시 에이비씨": {"symbol":"bcha"},
    "비엠피": {"symbol":"bmp"},
    "디비전": {"symbol":"dvi"},
    "피카": {"symbol":"pica"},
    "마일벌스": {"symbol":"mvc"},
    "벨라 프로토콜": {"symbol":"bel"},
    "비에프코인": {"symbol":"bfc"},
    "알파 파이낸스 랩": {"symbol":"alpha"},
    "티엠씨": {"symbol":"tmc"},
    "테넷": {"symbol":"ten"},
    "디아": {"symbol":"dia"},
    "스와이프": {"symbol":"sxp"},
    "쿠사마": {"symbol":"ksm"},
    "타키온 프로토콜": {"symbol":"ipx"},
    "브이시스템즈": {"symbol":"vsys"},
    "에프티엑스 토큰": {"symbol":"ftt"},
    "맵 프로토콜": {"symbol":"map"},
    "비지엑스 프로토콜": {"symbol":"bzrx"},
    "오니엑스": {"symbol":"onx"},
    "네스트 프로토콜": {"symbol":"nest"},
    "카르디아체인": {"symbol":"kai"},
    "커브": {"symbol":"crv"},
    "도도": {"symbol":"dodo"},
    "우마": {"symbol":"uma"},
    "더마이다스터치골드": {"symbol":"tmtg"},
    "하드 프로토콜": {"symbol":"hard"},
    "저스트": {"symbol":"jst"},
    "쇼고": {"symbol":"show"},
    "고머니2": {"symbol":"gom2"},
    "페치": {"symbol":"fet"},
    "미콘캐시": {"symbol":"mch"},
    "체인링크": {"symbol":"link"},
    "콘텐토스": {"symbol":"cos"},
    "럭스 바이오": {"symbol":"lbxc"},
    "아이스타더스트": {"symbol":"isdt"},
    "오리진 프로토콜": {"symbol":"ogn"},
    "발란서": {"symbol":"bal"},
    "판테온X": {"symbol":"xpn"},
    "오로라": {"symbol":"aoa"},
    "케이브이아이": {"symbol":"kvi"},
    "옵저버": {"symbol":"obsr"},
    "아이오텍스": {"symbol":"iotx"},
    "두드림체인": {"symbol":"drm"},
   "무비블록": {"symbol":"mbl"},
    "미스블록": {"symbol":"msb"},
    "바스아이디": {"symbol":"baas"},
    "울트라": {"symbol":"uos"},
    "테라 KRT": {"symbol":"krt"},
    "카바": {"symbol":"kava"},
    "알파 체인": {"symbol":"arpa"},
    "미네랄": {"symbol":"mnr"},
    "휴먼스케이프": {"symbol":"hum"},
    "소다코인": {"symbol":"soc"},
    "메타": {"symbol":"mta"},
    "바나나톡": {"symbol":"bna"},
    "스테이크": {"symbol":"stake"},
    "케이스타라이브": {"symbol":"ksc"},
    "엔에프유피": {"symbol":"nfup"},
    "레디": {"symbol":"redi"},
    "디알씨 모빌리티": {"symbol":"drc"},
    "바운스 토큰": {"symbol":"bot"},
    "에어블록": {"symbol":"abl"},
    "스트림 프로토콜": {"symbol":"stpl"},
    "플레타": {"symbol":"fleta"},
    "밴드 프로토콜": {"symbol":"band"},
    "베이직어텐션토큰": {"symbol":"bat"},
    "에이아이피": {"symbol":"aip"},
    "네오": {"symbol":"neo"},
    "오브스": {"symbol":"orbs"},
    "어셈블 프로토콜": {"symbol":"asm"},
    "다드": {"symbol":"dad"},
    "힌트체인": {"symbol":"hint"},
    "네스트리": {"symbol":"egg"},
    "에스티피": {"symbol":"stpt"},
    "아모코인": {"symbol":"amo"},
    "신세틱스 네트워크 토큰": {"symbol":"snx"},
    "트리클": {"symbol":"trcl"},
    "킹디에이쥐": {"symbol":"kdag"},
    "토모체인": {"symbol":"tomoe"},
    "비트코인사토시비전": {"symbol":"bsv"},
    "캠프코인": {"symbol":"camp"},
    "폴카닷": {"symbol":"dot"},
    "픽셀": {"symbol":"pxl"},
    "스텔라루멘": {"symbol":"xlm"},
    "온톨로지가스": {"symbol":"ong"},
    "템코": {"symbol":"temco"},
    "클라우드브릭": {"symbol":"clb"},
    "데리벡스": {"symbol":"dvx"},
    "썬": {"symbol":"sun"},
    "오미세고 네트워크": {"symbol":"omg"},
    "비트코인 골드": {"symbol":"btg"},
    "트론": {"symbol":"trx"},
    "라탐캐시": {"symbol":"lmch"},
    "라이트코인": {"symbol":"ltc"},
    "퀴즈톡": {"symbol":"qtcon"},
    "모티브": {"symbol":"mov"},
    "퓨리에버": {"symbol":"pure"},
    "이오스": {"symbol":"eos"},
    "루넥스": {"symbol":"rnx"},
    "스트리머": {"symbol":"data"},
    "톰 파이낸스": {"symbol":"tom"},
    "8X8 프로토콜": {"symbol":"exe"},
    "아스타": {"symbol":"asta"},
    "제로엑스": {"symbol":"zrx"},
    "아이비피 토큰": {"symbol":"ibp"},
    "카이버": {"symbol":"knc"},
    "코스모스아톰": {"symbol":"atom"},
    "앵커 네트워크": {"symbol":"ankr"},
    "팁": {"symbol":"tip"},
    "테조스": {"symbol":"xtz"},
    "리플": {"symbol":"xrp"},
    "이더리움": {"symbol":"eth"},
    "위드": {"symbol":"wiken"},    "라운지엠": {"symbol":"lzm"},
    "아튜브": {"symbol":"att"},
    "포도": {"symbol":"pod"},
    "러쉬 코인": {"symbol":"rush"},
    "프롬카": {"symbol":"fcr"},
    "오르빗체인": {"symbol":"orc"},
    "너보스": {"symbol":"ckb"},
    "카르테시": {"symbol":"ctsi"},
    "식스": {"symbol":"six"},
    "컴파운드": {"symbol":"comp"},
    "보라": {"symbol":"bora"},
    "폴스타코인": {"symbol":"psc"},
    "프로메테우스": {"symbol":"prom"},
    "피블": {"symbol":"pib"},
    "가스": {"symbol":"gas"},
    "폴리곤": {"symbol":"matic"},
    "비트토렌트": {"symbol":"btt"},
    "루아 토큰": {"symbol":"lua"},
    "질리카": {"symbol":"zil"},
    "엑시얼": {"symbol":"axl"},
    "비트코인 캐시": {"symbol":"bch"},
    "1인치": {"symbol":"1inch"},
    "코박 토큰": {"symbol":"cbk"},
    "클레이스왑": {"symbol":"ksp"},
    "미러 프로토콜": {"symbol":"mir"},
    "프론티어": {"symbol":"front"},
    "세럼": {"symbol":"srm"},
    "겟 프로토콜": {"symbol":"get"},
    "클레이튼": {"symbol":"klay"},
    "방코르": {"symbol":"bnt"},
    "페이코인": {"symbol":"pci"},
    "에이브": {"symbol":"aave"},
    "에스클레이": {"symbol":"sklay"},
    "에이다": {"symbol":"ada"},
    "아이오타": {"symbol":"iota"},
    "렌": {"symbol":"ren"},
    "퀀텀": {"symbol":"qtum"},
    "온톨로지": {"symbol":"ont"},
    "이더리움 클래식": {"symbol":"etc"},
    "루나": {"symbol":"luna"},
    "바이오패스포트": {"symbol":"biot"},
    "이다볼 네트워크": {"symbol":"idv"},
    "인슈어리움": {"symbol":"isr"},
    "파일코인": {"symbol":"fil"},
    "힙스": {"symbol":"hibs"},
    "유니스왑": {"symbol":"uni"}
};
   /*////////////////////////////////////
  핵심 response 함수입니다.
  histort - 유한빈 20210326 최초제작
        -
////////////////////////////////////*/
function response(
    room,
    msg,
    sender,
    isGroupChat,
    replier,
    ImageDB,
    packageName
) {
   // 방 체크
    if (arr_room.indexOf(room) == -1) {
        return false;
    } 
   // 메시지 좌우 공백제거
    msg.trim();
   
    var command = msg.split(" ")[0]; // 명령어 캐치
    var value = msg.split(" ")[1]; // 파라미터 값
   
    /*
   author : 유한빈
   history : 최초제작 - 20210326
   */
    if (command == "&코인") {
      
        var market;
        var name;
      
        if(coin.hasOwnProperty(value)){
          name = value;
          market = coin[value].symbol;
        }else{
          for(var k in coin){
            if(k.indexOf(value) != -1){
              name = k;
              market = coin[k].symbol;
              break;
            }
          }
        }
        
        if(market == ""){
          replier.reply("해당 코인은 존재하지 않습니다.");
          return;
        }
       /* 
        var coin_info = Utils.getWebText(
            "https://api.coinone.co.kr/ticker?currency="+market
        );
        
        var coin_info_json = coin_info.replace(/(<([^>]+)>)/gi, "").trim();
        //replier.reply(coin_info_json);
          //return;*/
        const coin_info_obj = JSON.parse(Utils.parse("https://api.coinone.co.kr/ticker?currency="+market).body().text());//JSON.parse(coin_info_json);
        //replier.reply(coin_info_obj.last);
          //return;  
          
        var dollar = "";
        if (market == "btc") {
            var coin_info_dollar = Utils.getWebText(
                "https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT"
            );
            var coin_info_json_dollar = coin_info_dollar
                .replace(/(<([^>]+)>)/gi, "")
                .trim();
            const coin_info_obj_dollar = JSON.parse(coin_info_json_dollar);
            dollar = coin_info_obj_dollar.lastPrice;

            var ExRate = Utils.getWebText(
                    "https://api.exchangeratesapi.io/latest?symbols=USD,KRW&base=USD"
                )
                .replace(/(<([^>]+)>)/gi, "")
                .trim();

            var Rate = parseFloat(ExRate.split(":")[2].split(",")[0]);

             replier.reply(
                "[" + name + "]\n" +
                "￦ " + numberWithCommas(parseFloat(coin_info_obj.last)) +
                "\n＄ " + numberWithCommas(parseFloat(dollar)) +
                "\n김프(" + (((coin_info_obj.last - dollar * Rate) / coin_info_obj.last) *
                    100).toFixed(2) + "%)" +
                "\n\n고가: " + numberWithCommas(parseFloat(coin_info_obj.high)) +
                "\n저가: " + numberWithCommas(parseFloat(coin_info_obj.low)) +
                "\n변동: " + numberWithCommas(parseInt(coin_info_obj.yesterday_last-coin_info_obj.last)) +
                "(" + parseFloat((coin_info_obj.yesterday_last-coin_info_obj.last) / coin_info_obj.last * 100).toFixed(2) + "%)"
            );
            return;
        }

        replier.reply(
            "[" +
            name +
            "]\n" +
            "￦ " + numberWithCommas(parseFloat(coin_info_obj.last)) +
            "\n고가: " + numberWithCommas(parseFloat(coin_info_obj.high)) +
            "\n저가: " + numberWithCommas(parseFloat(coin_info_obj.low)) +
            "\n변동: " + numberWithCommas(parseFloat(coin_info_obj.yesterday_last-coin_info_obj.last).toFixed(2)) +
            "(" + parseFloat((coin_info_obj.yesterday_last-coin_info_obj.last) / coin_info_obj.last * 100).toFixed(2) + "%)"
        );

    }
    /*
   author : 오태윤
   history : 최초제작 - 20210325
   */
    if (command == "&익절") {

        if (msg.split(" ").length > 2) {
            replier.reply("잘못된 명령어입니다.\n[!익절 현재가격]");
            return false;
        }
        var num = msg.split(" ")[1];
        num = num.replace(/,/g, '');
        if (isNumeric(num) == false) {
            replier.reply("숫자를 입력해주세요.");
            return false;
        }

        var per = new Array();

        per[0] = (Number(num) * 1.05).toFixed(2);
        per[1] = (Number(num) * 1.1).toFixed(2);
        per[2] = (Number(num) * 1.15).toFixed(2);
        per[3] = (Number(num) * 1.2).toFixed(2);

        var result = "[익절]";
        for (var i = 0; i < per.length; i++) {
            result += "\n" + ((i + 1) * 5) + "% : " + numberComma(per[i]);
        }
        replier.reply(result);
    }

    if (command == "&손절") {

        if (msg.split(" ").length > 2) {
            replier.reply("잘못된 명령어입니다.\n[!익절 현재가격]");
            return false;
        }
        var num = msg.split(" ")[1];
        num = num.replace(/,/g, '');

        if (isNumeric(num) == false) {
            replier.reply("숫자를 입력해주세요.");
            return false;
        }

        var per = new Array();

        per[0] = (Number(num) * 0.95).toFixed(2);
        per[1] = (Number(num) * 0.90).toFixed(2);
        per[2] = (Number(num) * 0.85).toFixed(2);
        per[3] = (Number(num) * 0.80).toFixed(2);

        var result = "[손절]";
        for (var i = 0; i < per.length; i++) {

            result += "\n" + ((i + 1) * 5) + "% : " + numberComma(per[i]);
        }
        replier.reply(result);
    }

}
/*////////////////////////////////////
  3자리마다 콤마를 찍는 함수
  histort - 유한빈 20210326 최초제작
        -
////////////////////////////////////*/
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*////////////////////////////////////
  입력된 메시지가 숫자인지 아닌지 
  histort - 오태윤 20210326 최초제작
        -
////////////////////////////////////*/
function isNumeric(num, opt) {
    // 좌우 trim(공백제거)을 해준다.
    num = String(num).replace(/^\s+|\s+$/g, "");

    if (typeof opt == "undefined" || opt == "1") {
        // 모든 10진수 (부호 선택, 자릿수구분기호 선택, 소수점 선택)
        var regex =
            /^[+\-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
    } else if (opt == "2") {
        // 부호 미사용, 자릿수구분기호 선택, 소수점 선택
        var regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
    } else if (opt == "3") {
        // 부호 미사용, 자릿수구분기호 미사용, 소수점 선택
        var regex = /^[0-9]+(\.[0-9]+)?$/g;
    } else {
        // only 숫자만(부호 미사용, 자릿수구분기호 미사용, 소수점 미사용)
        var regex = /^[0-9]$/g;
    }

    if (regex.test(num)) {
        num = num.replace(/,/g, "");
        return isNaN(num) ? false : true;
    } else {
        return false;
    }
}

/*////////////////////////////////////
  부동소수점을 고정소수점으로 바꿈
  histort - 권민재 20210326 최초제작
        -
////////////////////////////////////*/
function floating2fixed(trade_price){
    if(!isNumeric(trade_price)){
        var sp_trade_price = trade_price.split("E");
        var floating = sp_trade_price[0];
        var exponential = sp_trade_price[1];
        var add_e = 0;
        if(floating.indexOf(".") != -1){
            add_e = floating.split(".")[1].toString().length;
        }
        return Number(trade_price).toFixed(Math.abs(exponential)+Number(add_e));
    }else{
        return trade_price;
    }
}    
                
const scriptName = "BaBBot";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
 /*
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
}

*/
//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}