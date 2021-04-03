/*////////////////////////////////////
  전역변수 설정 부분입니다.
  histort - 오태윤 20210326 변수 최초생성
        -
////////////////////////////////////*/
const arr_room = ["민재", "BOT", "랩실", "로아"];

//market list
var market_list = ["upbit", "bithumb", "flat", "coinone"];//["upbit","bithumb","flat","coinone","binance"];
//api uri obj
var api_uri = {
    "upbit": {
        "base_uri": "https://api.upbit.com/v1",
        "info_uri": "/ticker?markets=krw-",
        "coin_list_uri": "/market/all"
    },
    "bithumb": {
        "base_uri": "https://api.bithumb.com",
        "info_uri": "/public/ticker/",
        "coin_list_uri": "bithumb"
    },
    "flat": {
        "base_uri": "https://www.flata.exchange/out/api",
        "info_uri": "/getTickers?symbol=",
        "coin_list_uri": "flat"
    },
    "coinone": {
        "base_uri": "https://api.coinone.co.kr",
        "info_uri": "/ticker?currency=",
        "coin_list_uri": "coinone"
    },
    "binance": {
        "base_uri": "",
        "info_uri": "",
        "coin_list_uri": ""
    }
};

var coin_list_by_market = {
    "coinone": {
        "비트코인": { "symbol": "btc" },
        "밀크": { "symbol": "mlk" },
        "캔디 프로토콜": { "symbol": "cad" },
        "비비": { "symbol": "vivi" },
        "트라이엄프엑스": { "symbol": "trix" },
        "더그래프": { "symbol": "grt" },
        "토로커스": { "symbol": "torocus" },
        "스시": { "symbol": "sushi" },
        "퀸트북": { "symbol": "qtbk" },
        "셀럽 플러스": { "symbol": "celeb" },
        "크립토뱅크": { "symbol": "cbank" },
        "리니어 파이낸스": { "symbol": "lina" },
        "아발란체": { "symbol": "avax" },
        "베이직": { "symbol": "basic" },
        "도니 파이낸스": { "symbol": "don" },
        "두카토": { "symbol": "ducato" },
        "메티스": { "symbol": "mts" },
        "인젝티브 프로토콜": { "symbol": "inj" },
        "핸디": { "symbol": "handy" },
        "엑시 인피니티": { "symbol": "axs" },
        "비트코인 캐시 에이비씨": { "symbol": "bcha" },
        "비엠피": { "symbol": "bmp" },
        "디비전": { "symbol": "dvi" },
        "피카": { "symbol": "pica" },
        "마일벌스": { "symbol": "mvc" },
        "벨라 프로토콜": { "symbol": "bel" },
        "비에프코인": { "symbol": "bfc" },
        "알파 파이낸스 랩": { "symbol": "alpha" },
        "티엠씨": { "symbol": "tmc" },
        "테넷": { "symbol": "ten" },
        "디아": { "symbol": "dia" },
        "스와이프": { "symbol": "sxp" },
        "쿠사마": { "symbol": "ksm" },
        "타키온 프로토콜": { "symbol": "ipx" },
        "브이시스템즈": { "symbol": "vsys" },
        "에프티엑스 토큰": { "symbol": "ftt" },
        "맵 프로토콜": { "symbol": "map" },
        "비지엑스 프로토콜": { "symbol": "bzrx" },
        "오니엑스": { "symbol": "onx" },
        "네스트 프로토콜": { "symbol": "nest" },
        "카르디아체인": { "symbol": "kai" },
        "커브": { "symbol": "crv" },
        "도도": { "symbol": "dodo" },
        "우마": { "symbol": "uma" },
        "더마이다스터치골드": { "symbol": "tmtg" },
        "하드 프로토콜": { "symbol": "hard" },
        "저스트": { "symbol": "jst" },
        "쇼고": { "symbol": "show" },
        "고머니2": { "symbol": "gom2" },
        "페치": { "symbol": "fet" },
        "미콘캐시": { "symbol": "mch" },
        "체인링크": { "symbol": "link" },
        "콘텐토스": { "symbol": "cos" },
        "럭스 바이오": { "symbol": "lbxc" },
        "아이스타더스트": { "symbol": "isdt" },
        "오리진 프로토콜": { "symbol": "ogn" },
        "발란서": { "symbol": "bal" },
        "판테온X": { "symbol": "xpn" },
        "오로라": { "symbol": "aoa" },
        "케이브이아이": { "symbol": "kvi" },
        "옵저버": { "symbol": "obsr" },
        "아이오텍스": { "symbol": "iotx" },
        "두드림체인": { "symbol": "drm" },
        "무비블록": { "symbol": "mbl" },
        "미스블록": { "symbol": "msb" },
        "바스아이디": { "symbol": "baas" },
        "울트라": { "symbol": "uos" },
        "테라 KRT": { "symbol": "krt" },
        "카바": { "symbol": "kava" },
        "알파 체인": { "symbol": "arpa" },
        "미네랄": { "symbol": "mnr" },
        "휴먼스케이프": { "symbol": "hum" },
        "소다코인": { "symbol": "soc" },
        "메타": { "symbol": "mta" },
        "바나나톡": { "symbol": "bna" },
        "스테이크": { "symbol": "stake" },
        "케이스타라이브": { "symbol": "ksc" },
        "엔에프유피": { "symbol": "nfup" },
        "레디": { "symbol": "redi" },
        "디알씨 모빌리티": { "symbol": "drc" },
        "바운스 토큰": { "symbol": "bot" },
        "에어블록": { "symbol": "abl" },
        "스트림 프로토콜": { "symbol": "stpl" },
        "플레타": { "symbol": "fleta" },
        "밴드 프로토콜": { "symbol": "band" },
        "베이직어텐션토큰": { "symbol": "bat" },
        "에이아이피": { "symbol": "aip" },
        "네오": { "symbol": "neo" },
        "오브스": { "symbol": "orbs" },
        "어셈블 프로토콜": { "symbol": "asm" },
        "다드": { "symbol": "dad" },
        "힌트체인": { "symbol": "hint" },
        "네스트리": { "symbol": "egg" },
        "에스티피": { "symbol": "stpt" },
        "아모코인": { "symbol": "amo" },
        "신세틱스 네트워크 토큰": { "symbol": "snx" },
        "트리클": { "symbol": "trcl" },
        "킹디에이쥐": { "symbol": "kdag" },
        "토모체인": { "symbol": "tomoe" },
        "비트코인사토시비전": { "symbol": "bsv" },
        "캠프코인": { "symbol": "camp" },
        "폴카닷": { "symbol": "dot" },
        "픽셀": { "symbol": "pxl" },
        "스텔라루멘": { "symbol": "xlm" },
        "온톨로지가스": { "symbol": "ong" },
        "템코": { "symbol": "temco" },
        "클라우드브릭": { "symbol": "clb" },
        "데리벡스": { "symbol": "dvx" },
        "썬": { "symbol": "sun" },
        "오미세고 네트워크": { "symbol": "omg" },
        "비트코인 골드": { "symbol": "btg" },
        "트론": { "symbol": "trx" },
        "라탐캐시": { "symbol": "lmch" },
        "라이트코인": { "symbol": "ltc" },
        "퀴즈톡": { "symbol": "qtcon" },
        "모티브": { "symbol": "mov" },
        "퓨리에버": { "symbol": "pure" },
        "이오스": { "symbol": "eos" },
        "루넥스": { "symbol": "rnx" },
        "스트리머": { "symbol": "data" },
        "톰 파이낸스": { "symbol": "tom" },
        "8X8 프로토콜": { "symbol": "exe" },
        "아스타": { "symbol": "asta" },
        "제로엑스": { "symbol": "zrx" },
        "아이비피 토큰": { "symbol": "ibp" },
        "카이버": { "symbol": "knc" },
        "두드림체인": { "symbol": "drm" },
        "무비블록": { "symbol": "mbl" },
        "미스블록": { "symbol": "msb" },
        "바스아이디": { "symbol": "baas" },
        "울트라": { "symbol": "uos" },
        "테라 KRT": { "symbol": "krt" },
        "카바": { "symbol": "kava" },
        "알파 체인": { "symbol": "arpa" },
        "미네랄": { "symbol": "mnr" },
        "휴먼스케이프": { "symbol": "hum" },
        "소다코인": { "symbol": "soc" },
        "메타": { "symbol": "mta" },
        "바나나톡": { "symbol": "bna" },
        "스테이크": { "symbol": "stake" },
        "케이스타라이브": { "symbol": "ksc" },
        "엔에프유피": { "symbol": "nfup" },
        "레디": { "symbol": "redi" },
        "디알씨 모빌리티": { "symbol": "drc" },
        "바운스 토큰": { "symbol": "bot" },
        "에어블록": { "symbol": "abl" },
        "스트림 프로토콜": { "symbol": "stpl" },
        "플레타": { "symbol": "fleta" },
        "밴드 프로토콜": { "symbol": "band" },
        "베이직어텐션토큰": { "symbol": "bat" },
        "에이아이피": { "symbol": "aip" },
        "네오": { "symbol": "neo" },
        "오브스": { "symbol": "orbs" },
        "어셈블 프로토콜": { "symbol": "asm" },
        "다드": { "symbol": "dad" },
        "힌트체인": { "symbol": "hint" },
        "네스트리": { "symbol": "egg" },
        "에스티피": { "symbol": "stpt" },
        "아모코인": { "symbol": "amo" },
        "신세틱스 네트워크 토큰": { "symbol": "snx" },
        "트리클": { "symbol": "trcl" },
        "킹디에이쥐": { "symbol": "kdag" },
        "토모체인": { "symbol": "tomoe" },
        "비트코인사토시비전": { "symbol": "bsv" },
        "캠프코인": { "symbol": "camp" },
        "폴카닷": { "symbol": "dot" },
        "픽셀": { "symbol": "pxl" },
        "스텔라루멘": { "symbol": "xlm" },
        "온톨로지가스": { "symbol": "ong" },
        "템코": { "symbol": "temco" },
        "클라우드브릭": { "symbol": "clb" },
        "데리벡스": { "symbol": "dvx" },
        "썬": { "symbol": "sun" },
        "오미세고 네트워크": { "symbol": "omg" },
        "비트코인 골드": { "symbol": "btg" },
        "트론": { "symbol": "trx" },
        "라탐캐시": { "symbol": "lmch" },
        "라이트코인": { "symbol": "ltc" },
        "퀴즈톡": { "symbol": "qtcon" },
        "모티브": { "symbol": "mov" },
        "퓨리에버": { "symbol": "pure" },
        "이오스": { "symbol": "eos" },
        "루넥스": { "symbol": "rnx" },
        "스트리머": { "symbol": "data" },
        "톰 파이낸스": { "symbol": "tom" },
        "8X8 프로토콜": { "symbol": "exe" },
        "아스타": { "symbol": "asta" },
        "제로엑스": { "symbol": "zrx" },
        "아이비피 토큰": { "symbol": "ibp" },
        "카이버": { "symbol": "knc" },
        "코스모스아톰": { "symbol": "atom" },
        "앵커 네트워크": { "symbol": "ankr" },
        "팁": { "symbol": "tip" },
        "테조스": { "symbol": "xtz" },
        "리플": { "symbol": "xrp" },
        "이더리움": { "symbol": "eth" },
        "위드": { "symbol": "wiken" },
        "라운지엠": { "symbol": "lzm" },
        "아튜브": { "symbol": "att" },
        "포도": { "symbol": "pod" },
        "러쉬 코인": { "symbol": "rush" },
        "프롬카": { "symbol": "fcr" },
        "오르빗체인": { "symbol": "orc" },
        "너보스": { "symbol": "ckb" },
        "카르테시": { "symbol": "ctsi" },
        "식스": { "symbol": "six" },
        "컴파운드": { "symbol": "comp" },
        "보라": { "symbol": "bora" },
        "폴스타코인": { "symbol": "psc" },
        "프로메테우스": { "symbol": "prom" },
        "피블": { "symbol": "pib" },
        "가스": { "symbol": "gas" },
        "폴리곤": { "symbol": "matic" },
        "비트토렌트": { "symbol": "btt" },
        "루아 토큰": { "symbol": "lua" },
        "질리카": { "symbol": "zil" },
        "엑시얼": { "symbol": "axl" },
        "비트코인 캐시": { "symbol": "bch" },
        "1인치": { "symbol": "1inch" },
        "코박 토큰": { "symbol": "cbk" },
        "클레이스왑": { "symbol": "ksp" },
        "미러 프로토콜": { "symbol": "mir" },
        "프론티어": { "symbol": "front" },
        "세럼": { "symbol": "srm" },
        "겟 프로토콜": { "symbol": "get" },
        "클레이튼": { "symbol": "klay" },
        "방코르": { "symbol": "bnt" },
        "페이코인": { "symbol": "pci" },
        "에이브": { "symbol": "aave" },
        "에스클레이": { "symbol": "sklay" },
        "에이다": { "symbol": "ada" },
        "아이오타": { "symbol": "iota" },
        "렌": { "symbol": "ren" },
        "퀀텀": { "symbol": "qtum" },
        "온톨로지": { "symbol": "ont" },
        "이더리움 클래식": { "symbol": "etc" },
        "루나": { "symbol": "luna" },
        "바이오패스포트": { "symbol": "biot" },
        "이다볼 네트워크": { "symbol": "idv" },
        "인슈어리움": { "symbol": "isr" },
        "파일코인": { "symbol": "fil" },
        "힙스": { "symbol": "hibs" },
        "유니스왑": { "symbol": "uni" }
    },
    "bithumb":{
        "메이커": { "symbol": "MKR" },
        "앵커뉴럴월드": { "symbol": "ANW" },
        "제노토큰": { "symbol": "XNO" },
        "템코": { "symbol": "TEMCO" },
        "크로미아": { "symbol": "CHR" },
        "오르빗체인": { "symbol": "ORC" },
        "콘텐토스": { "symbol": "COS" },
        "드레곤베인": { "symbol": "DVC" },
        "아모코인": { "symbol": "AMO" },
        "오로라": { "symbol": "AOA" },
        "엘리시아": { "symbol": "EL" },
        "300피트네트워크": { "symbol": "FIT" },
        "어댑터토큰": { "symbol": "ADP" },
        "이브이지": { "symbol": "EVG" },
        "더마이다스터치골드": { "symbol": "TMTG" },
        "옵저버": { "symbol": "OBSR" },
        "연파이낸스": { "symbol": "YFI" },
        "리니어파이낸스": { "symbol": "LINA" },
        "프로톤": { "symbol": "XPR" },
        "바이오패스포트": { "symbol": "BIOT" },
        "믹스마블": { "symbol": "MIX" },
        "다빈치": { "symbol": "DAC" },
        "퀸비": { "symbol": "QBZ" },
        "버거스왑": { "symbol": "BURGER" },
        "위믹스": { "symbol": "WEMIX" },
        "밀리미터토큰": { "symbol": "MM" },
        "폴라리스쉐어": { "symbol": "POLA" },
        "에이치닥": { "symbol": "HDAC" },
        "아이콘": { "symbol": "ICX" },
        "지엑스체인": { "symbol": "GXC" },
        "네스트리": { "symbol": "EGG" },
        "고머니2": { "symbol": "GOM2" },
        "애니버스": { "symbol": "ANV" },
        "디브이피": { "symbol": "DVP" },
        "플레타": { "symbol": "FLETA" },
        "퀴즈톡": { "symbol": "QTCON" },
        "보아": { "symbol": "BOA" },
        "더그래프": { "symbol": "GRT" },
        "비트코인다이아몬드": { "symbol": "BCD" },
        "알파체인": { "symbol": "ARPA" },
        "프레시움": { "symbol": "PCM" },
        "펑션엑스": { "symbol": "FX" },
        "어거": { "symbol": "REP" },
        "하이브": { "symbol": "HIVE" },
        "에프앤비프로토콜": { "symbol": "FNB" },
        "알고랜드": { "symbol": "ALGO" },
        "아이온": { "symbol": "AION" },
        "사이버베인": { "symbol": "CVT" },
        "코넌": { "symbol": "CON" },
        "월튼체인": { "symbol": "WTC" },
        "에이피엠코인": { "symbol": "APM" },
        "밸러토큰": { "symbol": "VALOR" },
        "세럼": { "symbol": "SRM" },
        "엠씨아이": { "symbol": "MCI" },
        "다드": { "symbol": "DAD" },
        "미러프로토콜": { "symbol": "MIR" },
        "코르텍스": { "symbol": "CTXC" },
        "아픽스": { "symbol": "APIX" },
        "소다코인": { "symbol": "SOC" },
        "젠서": { "symbol": "XSR" },
        "트러스트버스": { "symbol": "TRV" },
        "애터니티": { "symbol": "AE" },
        "스트라티스": { "symbol": "STRAX" },
        "신세틱스": { "symbol": "SNX" },
        "에이아이워크": { "symbol": "AWO" },
        "썬": { "symbol": "SUN" },
        "트루체인": { "symbol": "TRUE" },
        "에이브": { "symbol": "AAVE" },
        "머신익스체인지코인": { "symbol": "MXC" },
        "이마이너": { "symbol": "EM" },
        "센트럴리티": { "symbol": "CENNZ" },
        "위쇼토큰": { "symbol": "WET" },
        "브이시스템즈": { "symbol": "VSYS" },
        "루프링": { "symbol": "LRC" },
        "스시스왑": { "symbol": "SUSHI" },
        "컴파운드": { "symbol": "COMP" },
        "웨이키체인": { "symbol": "WICC" },
        "벨라프로토콜": { "symbol": "BEL" },
        "우마": { "symbol": "UMA" },
        "왐토큰": { "symbol": "WOM" },
        "타키온프로토콜": { "symbol": "IPX" },
        "타키온": { "symbol": "IPX" },
        "이포스": { "symbol": "WOZX" },
        "원루트네트워크": { "symbol": "RNT" },
        "라이파이낸스": { "symbol": "RAI" }
    },
    flat: {
        "비트코인": { "symbol": "BTC/KRW" },
        "이더리움": { "symbol": "ETH/KRW" },
        "커넥션": { "symbol": "CNT/KRW" },
        "밀리미터": { "symbol": "MM/KRW" },
        "빌드업": { "symbol": "BUP/KRW" },
        "리플": { "symbol": "XRP/KRW" },
        "성공": { "symbol": "BS/KRW" },
        "블랍스코인": { "symbol": "BLC/KRW" },
        "큐피바이오": { "symbol": "BIO/KRW" },
        "엔진엔코인": { "symbol": "NZC/KRW" },
        "레이븐코인": { "symbol": "RVN/KRW" },
        "다인": { "symbol": "DAIN/KRW" },
        "다판다": { "symbol": "DPD/KRW" },
        "밋토큰": { "symbol": "MTT/KRW" },
        "힐링플러스": { "symbol": "HP/KRW" },
        "타미토큰": { "symbol": "TMT/KRW" },
        "비엘": { "symbol": "BL/KRW" },
        "키보드토큰": { "symbol": "KEYT/KRW" },
        "지에셋": { "symbol": "GASSET/KRW" },
        "하이젠": { "symbol": "HGN/KRW" },
        "해시팟": { "symbol": "HPOT/KRW" },
        "퀸텟": { "symbol": "QTC/KRW" },
        "크립토워리어즈": { "symbol": "CZ/KRW" },
        "벨류에셋": { "symbol": "VAX/KRW" },
        "센터코인": { "symbol": "CENT/KRW" },
        "패스토큰": { "symbol": "PTX/KRW" },
        "오케이션": { "symbol": "OCN/KRW" },
        "델타체인": { "symbol": "DTC/KRW" },
        "세인트웨이토큰": { "symbol": "SNT/KRW" },
        "쇼잉": { "symbol": "SHOW/KRW" },
        "코메오": { "symbol": "COMEO/KRW" },
        "크립토엔뱅크": { "symbol": "xCnBn/KRW" },
        "글루오스": { "symbol": "GLU/KRW" },
        "트루리퀴드": { "symbol": "TL/KRW" },
        "업카": { "symbol": "UPC/KRW" },
        "펫코노미": { "symbol": "PETCO/KRW" },
        "KRWG": { "symbol": "KRWG/KRW" },
        "디바": { "symbol": "DIBA/KRW" }
    }
};

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (arr_room.indexOf(room) == -1) {
        return false;
    }
    // 메시지 좌우 공백제거
    msg = msg.trim();

    var sp_msg = msg.split(" ");
    var command = null; // 명령어 캐치
    var value = null; // 파라미터 값

    if (sp_msg.length == 1 && sp_msg[0].startsWith("/") == 1) {
        command = "ㅩ코인ㅹ"
        value = sp_msg[0].substring(1);
    } else {
        command = sp_msg[0]; // 명령어 캐치
        value = sp_msg[1]; // 파라미터 값
    }

    //마켓별 코인 리스트
    let coin_list_obj = null;
    //name, symbol
    var coin_base = null;
    //uri list
    var uri_obj = null;
    //거래소 명
    var market_name = null;

    if (command == "ㅩ코인ㅹ") {

        //거래소 순서대로
        for (var idx in market_list) {

            market_name = market_list[idx];
            uri_obj = api_uri[market_name];

            if (market_name == "upbit") {
                //upbit에는 코인 리스트 가져오는 api가 있음
                coin_list_obj = coin_list_upbit(uri_obj.base_uri, uri_obj.coin_list_uri);
            } else {
                //나머지 거래소에는 없음 @@@추후 찾거나 바꿈
                coin_list_obj = coin_list_by_market[uri_obj.coin_list_uri];
            }

            //거래소에 코인이 있는지 확인
            coin_base = coin_check(market_name, value, coin_list_obj);
            if (coin_base != false) {
                //있으면
                break;
            }
        }
        if (coin_base == false) {
            replier.reply(value + " 을(를) 검색할 수 없습니다.");
            return;
        }

        replier.reply(setting_by_market(market_name, uri_obj.base_uri, uri_obj.info_uri, value, coin_base));

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
            result += "\n" + ((i + 1) * 5) + "% : " + numberWithCommas(per[i]);
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

            result += "\n" + ((i + 1) * 5) + "% : " + numberWithCommas(per[i]);
        }
        replier.reply(result);
    }

}

//업비트 코인 리스트
function coin_list_upbit(base_uri, coin_list_uri) {
    var coin_list = Utils.getWebText(base_uri + coin_list_uri);
    var coin_list_json = coin_list.replace(/<[^>]+>/g, "").trim();
    return JSON.parse(coin_list_json);
}

//코인 체크
function coin_check(market_name, value, coin_list_obj) {
    //코인 symbol
    var symbol = null;
    //코인 kr_name
    var name = null;
    if (market_name == "upbit") {
        /**************************************** 업비트 ********************************************/
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
        }
        /**************************************** 업비트 ********************************************/
    } else {
        /**************************************** other ********************************************/
        if (coin_list_obj.hasOwnProperty(value)) {
            name = value;
            symbol = coin_list_obj[value].symbol;
        } else {
            for (var k in coin_list_obj) {
                if (k.indexOf(value) != -1) {
                    name = k;
                    symbol = coin_list_obj[k].symbol;
                    break;
                }
            }
        }
        /**************************************** other ********************************************/
    }

    if (name != null || symbol != null) {
        return { "name": name, "symbol": symbol };
    } else {
        return false;
    }
}

//각 거래소별 api 매핑
function setting_by_market(market_name, base_uri, info_uri, value, coin_base) {
    //가져온 코인 리스트
    let coin_info_obj = null;
    //현재 가격(종가)
    var trade_price = null;
    //최고 가격(고가)
    var high_price = null;
    //최저 가격(저가)
    var low_price = null;
    //전일 대비
    var change_price = null;
    //전일 대비 비율
    var change_rate = null;

    coin_info_obj = coin_search(base_uri, info_uri, coin_base.symbol);

    if (market_name == "upbit") {
        trade_price = coin_info_obj[0].trade_price;
        high_price = coin_info_obj[0].high_price;
        low_price = coin_info_obj[0].low_price;
        change_price = coin_info_obj[0].change == "FALL" ? coin_info_obj[0].change_price * -1 : coin_info_obj[0].change_price;
        change_rate = coin_info_obj[0].change == "FALL" ? coin_info_obj[0].change_rate * 100 * -1 : + coin_info_obj[0].change_rate * 100;

    } else if (market_name == "coinone") {
        trade_price = coin_info_obj.last;
        high_price = coin_info_obj.high;
        low_price = coin_info_obj.low;
        change_price = coin_info_obj.last - coin_info_obj.yesterday_last;
        change_rate = (coin_info_obj.last - coin_info_obj.yesterday_last) / coin_info_obj.yesterday_last * 100;

    } else if (market_name == "bithumb") {
        trade_price = coin_info_obj.data.closing_price;
        high_price = coin_info_obj.data.max_price;
        low_price = coin_info_obj.data.min_price;
        change_price = coin_info_obj.data.closing_price - coin_info_obj.data.prev_closing_price;
        change_rate = (coin_info_obj.data.closing_price - coin_info_obj.data.prev_closing_price) / coin_info_obj.data.closing_price * 100;

    } else if (market_name == "flat") {
        trade_price = coin_info_obj.list[0].current;
        high_price = coin_info_obj.list[0].high;
        low_price = coin_info_obj.list[0].low;
        change_price = coin_info_obj.list[0].dayChg;
        change_rate = coin_info_obj.list[0].dayChgRate;

    }
    change_arrow = change_price == 0 ? "-" : change_price > 0 ? "▲" : "▼";

    return coin_info(market_name, coin_base.symbol, coin_base.name, trade_price, high_price, low_price, change_price, change_rate, change_arrow);
}

//코인 정보
function coin_search(base_uri, info_uri, symbol) {
    // 해당 심볼 코인 시세 조회
    var coin_info_obj = JSON.parse(Utils.parse(base_uri + info_uri + symbol).body().text());

    return coin_info_obj;
}

//view message 코인 정보 make
function coin_info(market_name, symbol, name, trade_price, high_price, low_price, change_price, change_rate, change_arrow) {
    var return_message = "";

    if (market_name == "upbit") {
        market_name = "업비트";
    } else if (market_name == "coinone") {
        market_name = "코인원";
    } else if (market_name == "bithumb") {
        market_name = "빗썸";
    } else if (market_name == "flat") {
        market_name = "플랫타";
    }

    return_message +=
        "[" + name + "]\n" +
        "￦ " + numberWithCommas(parseFloat(trade_price));

    //비트코인 김프 추가
    if (symbol == "BTC" || symbol == "btc") {
        var dollar = "";
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

        return_message +=
            "\n＄ " + numberWithCommas(parseFloat(dollar)) +
            "\n(￦ " + numberWithCommas(parseInt(dollar * Rate)) + ")" +
            "\n김프(" + (((trade_price - dollar * Rate) / trade_price) * 100).toFixed(2) + "%)\n";
    }

    return_message +=
        "\n고가: " + numberWithCommas(parseFloat(high_price)) +
        "\n저가: " + numberWithCommas(parseFloat(low_price)) +
        "\n" + change_arrow + " " + numberWithCommas(parseFloat(parseFloat(change_price).toFixed(4))) + "(" + parseFloat(parseFloat(change_rate).toFixed(2)) + "%)";

    //비트코인이랑 이더리움 도미 추가
    if (symbol == "BTC" || symbol == "btc" || symbol == "ETH" || symbol == "eth") {
        return_message +=
            "\n도미 : " + getDomi(symbol) + "%";
    }

    return_message +=
        "\n\n" + market_name + " 기준";

    return return_message;
}

//도미넌스 가져오는 함수
function getDomi(symbol) {
    var domi = null;

    var json_domi = Utils.parse("https://api.coinlore.net/api/global/").body().text();
    var obj_domi = JSON.parse(json_domi);

    if (symbol.toUpperCase() == "BTC") {
        domi = obj_domi[0].btc_d;
    } else if (symbol.toUpperCase() == "ETH") {
        domi = obj_domi[0].eth_d;
    }
    return domi;
}

//환율
function exRate() {
    var ExRate = JSON.parse(Utils.parse("https://api.manana.kr/exchange/rate.json?base=KRW&code=USD").body().text());
    return parseFloat(ExRate[0].rate);
}

/*////////////////////////////////////
  3자리마다 콤마를 찍는 함수
  histort - 유한빈 20210326 최초제작
          - 권민재 20210404 수정
  ////////////////////////////////////*/
function numberWithCommas(x) {
    //return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (x == 0 || isNaN(x)) return 0;

    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (x + '');

    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

    return n;
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