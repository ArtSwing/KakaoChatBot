//환율
function exRate(){
    var ExRate = JSON.parse(Utils.parse("https://api.manana.kr/exchange/rate.json?base=KRW&code=USD").body().text());
    return parseFloat(ExRate[0].rate);
}

//도미넌스 가져오는 함수
function getDomi(symbol){
    /*
    var domi = org.jsoup.Jsoup.connect(
        "https://coinmarketcap.com/ko/charts/"
    ).get();
    var domi_div = domi.select(
        "#__next > div.sc-1mezg3x-0.fHFmDM.cmc-app-wrapper.cmc-app-wrapper--env-prod.cmc-theme--day > div.sc-1mezg3x-1.fxStDx > div.xwtbyq-0.iGclcX.cmc-bottom-margin-1x.cmc-header-desktop > div.sc-33i2yg-0.dOnegn > div > div:nth-child(1) > span:nth-child(5) > a"
    ).toString()
        .replace(/(<([^>]+)>)/gi, "")
        .trim();
    domi_div_arr = domi_div.split("&nbsp");
    domi_div_btc = domi_div_arr[0];
    domi_div_eth = domi_div_arr[1];
    */
    /*
    var domi = null;

    var json_domi = Utils.parse("https://api.coinlore.net/api/global/").body().text();
    var obj_domi = JSON.parse(test);
    
    if(symbol.toUpperCase == "BTC"){
        domi = obj_domi.btc_d;
    }else if(symbol.toUpperCase == "ETH"){
        domi = obj_domi.eth_d;
    }
    */
    var domi = null;

    var json = Utils.parse("https://coinmarketcap.com/ko/charts/").body().text();
    json = json.split("Dominance: ")[1].split("ETH Gas:")[0];
    if (symbol.toUpperCase() == "ETH") {
        domi = json.split(" ")[3];
    } else {
        domi = json.split(" ")[1];
    }
    return domi;
}