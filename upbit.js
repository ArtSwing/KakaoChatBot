var coin_list = Utils.getWebText("https://api.upbit.com/v1/market/all");
var coin_list_json = coin_list.replace(/<[^>]+>/g, "").trim();
const coin_list_obj = JSON.parse(coin_list_json);
// 최종 검색 심볼과 이름
var symbol = null;
var name = null;
const search_map = new Map();
// 전체 코인 리스트에서 검색한 코인들 중 KRW마켓인것만 리스트에 추가
for (var i = 0; i < coin_list_obj.length; i++) {
    if (coin_list_obj[i].korean_name.includes(value)) {
        if (coin_list_obj[i].market.split("-")[0] == "KRW") {
            search_map.set(coin_list_obj[i].korean_name, coin_list_obj[i].market.split("-")[1]);
        }
    }
}
// search_map 이름이 포함된 코인 리스트
if (search_map.size > 0) {
    search_map.forEach((market, val) => {
        if (val == value) {
            name = val;
            symbol = market;
        }
    });
    if (name == null) {
        name = search_map
            .keys()
            .next()
            .value;
        symbol = search_map
            .values()
            .next()
            .value;
    }
} else {
    replier.reply("해당 코인은 존재하지 않습니다.");
    return;
}
// 해당 심볼 코인 시세 조회
var coin_info = Utils.getWebText("https://api.upbit.com/v1/ticker?markets=krw-" + symbol);
var coin_info_json = coin_info.replace(/(<([^>]+)>)/gi, "").trim();
const coin_info_obj = JSON.parse(coin_info_json);
var dollar = "";
if (symbol == "BTC") {
    var coin_info_dollar = Utils.getWebText("https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT");
    var coin_info_json_dollar = coin_info_dollar.replace(/(<([^>]+)>)/gi, "").trim();
    const coin_info_obj_dollar = JSON.parse(coin_info_json_dollar);
    dollar = coin_info_obj_dollar.lastPrice;
    var ExRate = Utils
        .getWebText("https://api.exchangeratesapi.io/latest?symbols=USD,KRW&base=USD")
        .replace(/(<([^>]+)>)/gi, "")
        .trim();
    var Rate = parseFloat(ExRate.split(":")[2].split(",")[0]);
    replier.reply("[" + name + "]\n" + "￦ " + numberWithCommas(parseFloat(coin_info_obj[0].trade_price)) + "\n＄ " + numberWithCommas(parseFloat(dollar)) + "\n(￦ " + numberWithCommas(parseInt(dollar * Rate)) + ")" + "\n김프(" + (
        ((coin_info_obj[0].trade_price - dollar * Rate) / coin_info_obj[0].trade_price) * 100
    ).toFixed(2) + "%)" + "\n\n고가: " + numberWithCommas(parseFloat(coin_info_obj[0].high_price)) + "\n저가: " + numberWithCommas(parseFloat(coin_info_obj[0].low_price)) + "\n변동: " + numberWithCommas(parseInt(
        coin_info_obj[0].change == "FALL"
            ? coin_info_obj[0].change_price * -1
            : coin_info_obj[0].change_price
    )) + "(" + parseFloat(
        coin_info_obj[0].change == "FALL"
            ? coin_info_obj[0].change_rate * 100 * -1
            : + coin_info_obj[0].change_rate * 100
    ).toFixed(2) + "%)");
    return;
}
replier.reply("[" + name + "]\n" + "￦ " + numberWithCommas(parseFloat(coin_info_obj[0].trade_price)) + "\n고가: " + numberWithCommas(parseFloat(coin_info_obj[0].high_price)) + "\n저가: " + numberWithCommas(parseFloat(coin_info_obj[0].low_price)) + "\n변동: " + numberWithCommas(parseFloat(
    coin_info_obj[0].change == "FALL"
        ? coin_info_obj[0].change_price * -1
        : coin_info_obj[0].change_price
).toFixed(2)) + "(" + parseFloat(
    coin_info_obj[0].change == "FALL"
        ? coin_info_obj[0].change_rate * 100 * -1
        : coin_info_obj[0].change_rate * 100
).toFixed(2) + "%)");