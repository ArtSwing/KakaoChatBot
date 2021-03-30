//coin목록
var coin_list = Utils.getWebText("https://api.upbit.com/v1/market/all");
var coin_list_json = coin_list.replace(/<[^>]+>/g, "").trim();
const coin_list_obj = JSON.parse(coin_list_json);

//symbol
var market;
//kr_name
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

// 해당 코인 정보
var coin_info = Utils.getWebText(
    "https://api.upbit.com/v1/ticker?markets=krw-" + market
);

var coin_info_json = coin_info.replace(/(<([^>]+)>)/gi, "").trim();
const coin_info_obj = JSON.parse(coin_info_json);

//현재 가격(종가)
var trade_price;
//최고 가격(고가)
var high_price;
//최저 가격(저가)
var low_price;
//전일 대비
var change_price;
//전일 대비 비율
var change_rate;

trade_price = coin_info_obj[0].trade_price;
high_price = coin_info_obj[0].high_price;
low_price = coin_info_obj[0].low_price;
change_price = coin_info_obj[0].change_price;
change_rate = coin_info_obj[0].change_rate;

//view message 코인 정보 make
function coin_info(market, name, trade_price, high_price, low_price, change_price, change_rate){
    
    var dollar = "";
    if (market == "BTC") {
        /*********************************이부분 바이낸스 만들면 바꾸면 좋을듯 */
        var coin_info_dollar = Utils.getWebText(
            "https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT"
        );
        var coin_info_json_dollar = coin_info_dollar
            .replace(/(<([^>]+)>)/gi, "")
            .trim();
        const coin_info_obj_dollar = JSON.parse(coin_info_json_dollar);
        dollar = coin_info_obj_dollar.lastPrice;
        /****************************************************************** */
        var Rate = exRate();

        replier.reply(
            "[" + name + "]\n" +
            "￦ " + numberWithCommas(parseFloat(trade_price)) +
            "\n＄ " + numberWithCommas(parseFloat(dollar)) +
            "\n김프(" + (((trade_price - dollar * Rate) / trade_price) *
                100).toFixed(2) + "%)" +
            "\n\n고가: " + numberWithCommas(parseFloat(high_price)) +
            "\n저가: " + numberWithCommas(parseFloat(low_price)) +
            "\n변동: " + numberWithCommas(parseInt(change_price)) +
            "(" + parseFloat(change_rate * 100).toFixed(2) + "%)"
        );
        return;
    }

    replier.reply(
        "[" +
        name +
        "]\n" +
        "￦ " + numberWithCommas(parseFloat(trade_price)) +
        "\n고가: " + numberWithCommas(parseFloat(high_price)) +
        "\n저가: " + numberWithCommas(parseFloat(low_price)) +
        "\n변동: " + numberWithCommas(parseFloat(change_price).toFixed(2)) +
        "(" + parseFloat(change_rate * 100).toFixed(2) + "%)"
    );
}

//환율
function exRate(){
    var ExRate = Utils.getWebText(
        "https://api.exchangeratesapi.io/latest?symbols=USD,KRW&base=USD"
    )
    .replace(/(<([^>]+)>)/gi, "")
    .trim();

    return parseFloat(ExRate.split(":")[2].split(",")[0]);
}