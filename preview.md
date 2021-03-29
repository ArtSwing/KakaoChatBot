/*////////////////////////////////////
  전역변수 설정 부분입니다.
  histort - 오태윤 20210326 변수 최초생성
        -
////////////////////////////////////*/
const arr_room = [""];


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
    if (command == "!코인") {
        var coin_list = Utils.getWebText("https://api.upbit.com/v1/market/all");
        var coin_list_json = coin_list.replace(/<[^>]+>/g, "").trim();
        const coin_list_obj = JSON.parse(coin_list_json);

        var market;
        var name;
        for (var i = 0; i < coin_list_obj.length; i++) {
            if (coin_list_obj[i].korean_name.includes(value)) {
                if (coin_list_obj[i].market.split("-")[0] == "KRW") {
                    market = coin_list_obj[i].market.split("-")[1];
                    name = coin_list_obj[i].korean_name;
                    break;
                }
            }
        }

        var coin_info = Utils.getWebText(
            "https://api.upbit.com/v1/ticker?markets=krw-" + market
        );

        var coin_info_json = coin_info.replace(/(<([^>]+)>)/gi, "").trim();
        const coin_info_obj = JSON.parse(coin_info_json);

        var dollar = "";
        if (market == "BTC") {
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
                "￦ " + numberWithCommas(parseFloat(coin_info_obj[0].trade_price)) +
                "\n＄ " + numberWithCommas(parseFloat(dollar)) +
                "\n김프(" + (((coin_info_obj[0].trade_price - dollar * Rate) / coin_info_obj[0].trade_price) *
                    100).toFixed(2) + "%)" +
                "\n\n고가: " + numberWithCommas(parseFloat(coin_info_obj[0].high_price)) +
                "\n저가: " + numberWithCommas(parseFloat(coin_info_obj[0].low_price)) +
                "\n변동: " + numberWithCommas(parseInt(coin_info_obj[0].change_price)) +
                "(" + parseFloat(coin_info_obj[0].change_rate * 100).toFixed(2) + "%)"
            );
            return;
        }

        replier.reply(
            "[" +
            name +
            "]\n" +
            "￦ " + numberWithCommas(parseFloat(coin_info_obj[0].trade_price)) +
            "\n고가: " + numberWithCommas(parseFloat(coin_info_obj[0].high_price)) +
            "\n저가: " + numberWithCommas(parseFloat(coin_info_obj[0].low_price)) +
            "\n변동: " + numberWithCommas(parseFloat(coin_info_obj[0].change_price).toFixed(2)) +
            "(" + parseFloat(coin_info_obj[0].change_rate * 100).toFixed(2) + "%)"
        );

    }
   
   
   /*
   author : 오태윤
   history : 최초제작 - 20210325
   */
    if (command == "!익절") {

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

    if (command == "!손절") {

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
