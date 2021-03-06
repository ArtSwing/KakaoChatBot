const scriptName = "MoonBot";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
/*////////////////////////////////////
 전역변수 설정 부분입니다.
 histort - 오태윤 20210326 변수 최초생성
       -
////////////////////////////////////*/
const arr_room = ["종학", "BOT"];
const bthList = new Map();
bthList.set("메이커", "MKR");
bthList.set("앵커뉴럴월드", "ANW");
bthList.set("제노토큰", "XNO");
bthList.set("템코", "TEMCO");
bthList.set("크로미아", "CHR");
bthList.set("오르빗체인", "ORC");
bthList.set("콘텐토스", "COS");
bthList.set("드레곤베인", "DVC");
bthList.set("아모코인", "AMO");
bthList.set("오로라", "AOA");
bthList.set("엘리시아", "EL");
bthList.set("300피트네트워크", "FIT");
bthList.set("어댑터토큰", "ADP");
bthList.set("이브이지", "EVG");
bthList.set("더마이다스터치골드", "TMTG");
bthList.set("옵저버", "OBSR");
bthList.set("연파이낸스", "YFI");
bthList.set("리니어파이낸스", "LINA");
bthList.set("프로톤", "XPR");
bthList.set("바이오패스포트", "BIOT");
bthList.set("믹스마블", "MIX");
bthList.set("다빈치", "DAC");
bthList.set("퀸비", "QBZ");
bthList.set("버거스왑", "BURGER");
bthList.set("위믹스", "WEMIX");
bthList.set("밀리미터토큰", "MM");
bthList.set("폴라리스쉐어", "POLA");
bthList.set("에이치닥", "HDAC");
bthList.set("아이콘", "ICX");
bthList.set("지엑스체인", "GXC");
bthList.set("네스트리", "EGG");
bthList.set("고머니2", "GOM2");
bthList.set("애니버스", "ANV");
bthList.set("디브이피", "DVP");
bthList.set("플레타", "FLETA");
bthList.set("퀴즈톡", "QTCON");
bthList.set("보아", "BOA");
bthList.set("더그래프", "GRT");
bthList.set("비트코인다이아몬드", "BCD");
bthList.set("알파체인", "ARPA");
bthList.set("프레시움", "PCM");
bthList.set("펑션엑스", "FX");
bthList.set("어거", "REP");
bthList.set("하이브", "HIVE");
bthList.set("에프앤비프로토콜", "FNB");
bthList.set("알고랜드", "ALGO");
bthList.set("아이온", "AION");
bthList.set("사이버베인", "CVT");
bthList.set("코넌", "CON");
bthList.set("월튼체인", "WTC");
bthList.set("에이피엠코인", "APM");
bthList.set("밸러토큰", "VALOR");
bthList.set("세럼", "SRM");
bthList.set("엠씨아이", "MCI");
bthList.set("다드", "DAD");
bthList.set("미러프로토콜", "MIR");
bthList.set("코르텍스", "CTXC");
bthList.set("아픽스", "APIX");
bthList.set("소다코인", "SOC");
bthList.set("젠서", "XSR");
bthList.set("트러스트버스", "TRV");
bthList.set("애터니티", "AE");
bthList.set("스트라티스", "STRAX");
bthList.set("신세틱스", "SNX");
bthList.set("에이아이워크", "AWO");
bthList.set("썬", "SUN");
bthList.set("트루체인", "TRUE");
bthList.set("에이브", "AAVE");
bthList.set("머신익스체인지코인", "MXC");
bthList.set("이마이너", "EM");
bthList.set("센트럴리티", "CENNZ");
bthList.set("위쇼토큰", "WET");
bthList.set("브이시스템즈", "VSYS");
bthList.set("루프링", "LRC");
bthList.set("스시스왑", "SUSHI");
bthList.set("컴파운드", "COMP");
bthList.set("웨이키체인", "WICC");
bthList.set("벨라프로토콜", "BEL");
bthList.set("우마", "UMA");
bthList.set("왐토큰", "WOM");
bthList.set("타키온프로토콜", "IPX");
bthList.set("타키온", "IPX");
bthList.set("이포스", "WOZX");
bthList.set("원루트네트워크", "RNT");
bthList.set("맵프로토콜", "MAP");
bthList.set("마일벌스", "MVC");

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
    var KRname = msg.split(" ")[1]; // 파라미터 값

    /*
   author : 유한빈
   history : 최초제작 - 20210326
   */
    if (command == "?코인") {

        var market;
        var coin;
        bthList.forEach(function (value, key) {
            if (key.includes(KRname)) {
                coin = value;

                return;
            }
        })




        if (coin == null) {
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
        if (coin == "MAP") {
            coin = coin + "_BTC";
        }

        const coin_info_obj = JSON.parse(Utils.parse("https://api.bithumb.com/public/ticker/" + coin).body().text());//JSON.parse(coin_info_json);




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
                "\n변동: " + numberWithCommas(parseInt(coin_info_obj.yesterday_last - coin_info_obj.last)) +
                "(" + parseFloat((coin_info_obj.yesterday_last - coin_info_obj.last) / coin_info_obj.last * 100).toFixed(2) + "%)"
            );
            //{"status":"0000","data":{"opening_price":"398.4","closing_price":"417.5","min_price":"366.7",
            //"max_price":"424.8","units_traded":"4042189.21285505","acc_trade_value":"1575366243.0355",
            //"prev_closing_price":"398","units_traded_24H":"4330600.1371913",
            //"acc_trade_value_24H":"1690600225.8864","fluctate_24H":"15.5","fluctate_rate_24H":"3.86","date":"1617198801837"}}
            return;
        }
        if (coin == "MAP_BTC") {
            replier.reply(
                "[" +
                "맵 프로토콜" +
                "]\n" +
                "₿ : " + parseFloat(coin_info_obj.data.closing_price) +
                "\n고가: " + parseFloat(coin_info_obj.data.max_price) +
                "\n저가: " + parseFloat(coin_info_obj.data.min_price) +
                "\n변동: " + parseFloat(coin_info_obj.data.closing_price - coin_info_obj.data.prev_closing_price).toFixed(8) +
                "(" + parseFloat((coin_info_obj.data.closing_price - coin_info_obj.data.prev_closing_price) / coin_info_obj.data.closing_price * 100).toFixed(2) + "%)"
            );
            return;
        }
        replier.reply(
            "[" +
            KRname +
            "]\n" +
            "￦ " + numberWithCommas(parseFloat(coin_info_obj.data.closing_price)) +
            "\n고가: " + numberWithCommas(parseFloat(coin_info_obj.data.max_price)) +
            "\n저가: " + numberWithCommas(parseFloat(coin_info_obj.data.min_price)) +
            "\n변동: " + numberWithCommas(parseFloat(coin_info_obj.data.closing_price - coin_info_obj.data.prev_closing_price).toFixed(2)) +
            "(" + parseFloat((coin_info_obj.data.closing_price - coin_info_obj.data.prev_closing_price) / coin_info_obj.data.closing_price * 100).toFixed(2) + "%)"
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
function floating2fixed(trade_price) {
    if (!isNumeric(trade_price)) {
        var sp_trade_price = trade_price.split("E");
        var floating = sp_trade_price[0];
        var exponential = sp_trade_price[1];
        var add_e = 0;
        if (floating.indexOf(".") != -1) {
            add_e = floating.split(".")[1].toString().length;
        }
        return Number(trade_price).toFixed(Math.abs(exponential) + Number(add_e));
    } else {
        return trade_price;
    }
}

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

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
    var textView = new android.widget.TextView(activity);
    textView.setText("Hello, World!");
    textView.setTextColor(android.graphics.Color.DKGRAY);
    activity.setContentView(textView);
}

function onStart(activity) { }

function onResume(activity) { }

function onPause(activity) { }

function onStop(activity) { }