/*////////////////////////////////////
  전역변수 설정 부분입니다.
  historty - 오태윤 20210326 변수 최초생성
           - 유한빈 20210420 채팅통계 삭제
           -
유한빈 20210603 롱숏 추가 + 빗썸 추가상장 코인 추가
유한빈 20211130 바이낸스 추가상장코인 + 빗썸오류수정 + 쿠코인 업데이트
////////////////////////////////////*/
const arr_room = ["워렌존버핏","민재", "BOT", "랩실", "로아", "실험실임","밥봇체험관","재문","세이프머니","트론","암호","제주","파랑새","피린","희단","솔피","정보를다오","근면성실","꿀통","근면성실2","생프","수확","갓물주"];
//롱숏관련
var types = {
    "5분": 3,
    "15분": 10,
    "30분": 11,
    "1시간": 2,
    "4시간": 1,
    "12시간": 4,
    "24시간": 5
};
var USD = 0.0;
//market list
var market_list = ["upbit","upbit_btc", "bithumb", "kucoin", "coinone", "binance"];
var market_list_kr = {"업비트":"upbit","업빗":"upbit","ㅇㅂㅌ":"upbit","업비트비티시":"upbit_btc",
"업비트비티씨":"upbit_btc","비티씨":"upbit_btc","ㅂㅌㅆ":"upbit_btc","빗썸":"bithumb","썸":"bithumb","ㅂㅆ":"bithumb","쿠코인":"kucoin","ㅋㅋㅇ":"kucoin",
"코인원":"coinone","ㅋㅇㅇ":"coinone","바이낸스":"binance","바낸":"binance","ㅂㄴ":"binance","ㅂㅇㄴㅅ":"binance"};
//api uri obj
var api_uri = {
    "upbit": {
        "base_uri": "https://api.upbit.com/v1",
        "info_uri": "/ticker?markets=krw-",
        "coin_list_uri": "/market/all"
    },
    "upbit_btc": {
        "base_uri": "https://api.upbit.com/v1",
        "info_uri": "/ticker?markets=btc-",
        "coin_list_uri": "/market/all"
    },
    "bithumb": {
        "base_uri": "https://api.bithumb.com",
        "info_uri": "/public/ticker/",
        "coin_list_uri": "bithumb"
    },
    "kucoin": {
        "base_uri": "https://api.kucoin.com/api/v1",
        "info_uri": "/market/stats?symbol=",
        "coin_list_uri": "kucoin"
    },
    "coinone": {
        "base_uri": "https://api.coinone.co.kr",
        "info_uri": "/ticker?currency=",
        "coin_list_uri": "coinone"
    },
  
    "binance": {
        "base_uri": "https://api.binance.com/api/v1",
        "info_uri": "/ticker/24hr?symbol=",
        "coin_list_uri": "binance"
    }
};
var coin_list_by_market = {
    "coinone": {       
        "수이":{'symbol':"sui"},
        "비트코인": { "symbol": "btc" },
        "위믹스": { "symbol": "wemix" },
        "이더니티체인": { "symbol": "ern" },
        "팬텀": { "symbol": "ftm" },
        "컨벡스 파이낸스": { "symbol": "cvx" },
        "플럭스": { "symbol": "flux" },
        "알케미페이": { "symbol": "ach" },
        "캔디프로토콜": { "symbol": "cad" },
        "비비": { "symbol": "vivi" },
        "트라이엄프엑스": { "symbol": "trix" },
        "더그래프": { "symbol": "grt" },
        "토로커스": { "symbol": "torocus" },
        "스시": { "symbol": "sushi" },
        "퀸트북": { "symbol": "qtbk" },
        "셀럽플러스": { "symbol": "celeb" },
        "크립토뱅크": { "symbol": "cbank" },
        "리니어파이낸스": { "symbol": "lina" },
        "아발란체": { "symbol": "avax" },
        "베이직": { "symbol": "basic" },
        "도니파이낸스": { "symbol": "don" },
        "갈라": { "symbol": "gala" },
        "위믹스" : {"symbol":"wemix"},
        "메티스": { "symbol": "mts" },
        "인젝티브 프로토콜": { "symbol": "inj" },
        "핸디": { "symbol": "handy" },
        "엑시인피니티": { "symbol": "axs" },
        "비트코인캐시에이비씨": { "symbol": "bcha" },
        "비엠피": { "symbol": "bmp" },
        "디비전": { "symbol": "dvi" },
        "피카": { "symbol": "pica" },
        "마일벌스": { "symbol": "mvc" },
        "벨라프로토콜": { "symbol": "bel" },
        "비에프코인": { "symbol": "bfc" },
        "알파파이낸스랩": { "symbol": "alpha" },
        "티엠씨": { "symbol": "tmc" },
        "테넷": { "symbol": "ten" },
        "디아": { "symbol": "dia" },
        "스와이프": { "symbol": "sxp" },
        "쿠사마": { "symbol": "ksm" },
        "타키온프로토콜": { "symbol": "ipx" },
        "브이시스템즈": { "symbol": "vsys" },
        "에프티엑스토큰": { "symbol": "ftt" },
        "맵프로토콜": { "symbol": "map" },
        "비지엑스프로토콜": { "symbol": "bzrx" },
        "오니엑스": { "symbol": "onx" },
        "네스트프로토콜": { "symbol": "nest" },
        "카르디아체인": { "symbol": "kai" },
        "커브": { "symbol": "crv" },
        "도도": { "symbol": "dodo" },
        "우마": { "symbol": "uma" },
        "더마이다스터치골드": { "symbol": "tmtg" },
        "하드프로토콜": { "symbol": "hard" },
        "저스트": { "symbol": "jst" },
        "쇼고": { "symbol": "show" },
        "고머니2": { "symbol": "gom2" },
        "페치": { "symbol": "fet" },
        "미콘캐시": { "symbol": "mch" },
        "체인링크": { "symbol": "link" },
        "콘텐토스": { "symbol": "cos" },
        "럭스바이오": { "symbol": "lbxc" },
        "아이스타더스트": { "symbol": "isdt" },
        "오리진프로토콜": { "symbol": "ogn" },
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
        "디알씨모빌리티": { "symbol": "drc" },
        "바운스토큰": { "symbol": "bot" },
        "에어블록": { "symbol": "abl" },
        "스트림프로토콜": { "symbol": "stpl" },
        "플레타": { "symbol": "fleta" },
        "밴드프로토콜": { "symbol": "band" },
        "베이직어텐션토큰": { "symbol": "bat" },
        "에이아이피": { "symbol": "aip" },
        "네오": { "symbol": "neo" },
        "오브스": { "symbol": "orbs" },
        "어셈블프로토콜": { "symbol": "asm" },
        "다드": { "symbol": "dad" },
        "힌트체인": { "symbol": "hint" },
        "네스트리": { "symbol": "egg" },
        "에스티피": { "symbol": "stpt" },
        "아모코인": { "symbol": "amo" },
        "신세틱스네트워크토큰": { "symbol": "snx" },
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
        "오미세고네트워크": { "symbol": "omg" },
        "비트코인골드": { "symbol": "btg" },
        "트론": { "symbol": "trx" },
        "라탐캐시": { "symbol": "lmch" },
        "라이트코인": { "symbol": "ltc" },
        "퀴즈톡": { "symbol": "qtcon" },
        "모티브": { "symbol": "mov" },
        "퓨리에버": { "symbol": "pure" },
        "이오스": { "symbol": "eos" },
        "루넥스": { "symbol": "rnx" },
        "스트리머": { "symbol": "data" },
        "톰파이낸스": { "symbol": "tom" },
        "8X8프로토콜": { "symbol": "exe" },
        "아스타": { "symbol": "asta" },
        "제로엑스": { "symbol": "zrx" },
        "아이비피토큰": { "symbol": "ibp" },
        "카이버": { "symbol": "knc" },
        "코스모스아톰": { "symbol": "atom" },
        "앵커네트워크": { "symbol": "ankr" },
        "팁": { "symbol": "tip" },
        "테조스": { "symbol": "xtz" },
        "리플": { "symbol": "xrp" },
        "이더리움": { "symbol": "eth" },
        "위드": { "symbol": "wiken" },
        "라운지엠": { "symbol": "lzm" },
        "아튜브": { "symbol": "att" },
        "포도": { "symbol": "pod" },
        "러쉬코인": { "symbol": "rush" },
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
        "루아토큰": { "symbol": "lua" },
        "질리카": { "symbol": "zil" },
        "엑시얼": { "symbol": "axl" },
         "비트코인캐시": { "symbol": "bch" },
        "1인치": { "symbol": "1inch" },
        "코박토큰": { "symbol": "cbk" },
        "클레이스왑": { "symbol": "ksp" },
        "미러프로토콜": { "symbol": "mir" },
        "프론티어": { "symbol": "front" },
        "세럼": { "symbol": "srm" },
        "겟프로토콜": { "symbol": "get" },
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
        "이더리움클래식": { "symbol": "etc" },
        "바이오패스포트": { "symbol": "biot" },
        "이다볼네트워크": { "symbol": "idv" },
        "인슈어리움": { "symbol": "isr" },
        "파일코인": { "symbol": "fil" },
        "힙스": { "symbol": "hibs" },
        "유니스왑": { "symbol": "uni" },
        "릿엔트리": { "symbol": "lit" },
        "이캐시": {"symbol" : "xec"},
        "비트다오": { "symbol": "bit" },
        "다오메이커": { "symbol": "dao"}
    },
    "bithumb": {
      "수이": { "symbol": "SUI" },
      "크라토스": { "symbol": "CRTS" },
      "블러": { "symbol": "BLUR" },
      "아치루트": { "symbol": "ALT" },
      "에이피이엔에프티": { "symbol": "NFT" },
      "알타바" : {"symbol" : "TAVA"},
      "마블렉스":{"symbol":"MBX"},
      "프론티어": { "symbol": "FRONT" },
      "코인98": { "symbol": "C98" },
      "다오메이커": { "symbol": "DAO" },
      "우네트워크": { "symbol": "WOO" },
      "써틱": { "symbol": "CTK" },
      "클레이튼": { "symbol": "KLAY" },
      "마일벌스": { "symbol": "MVC" },
      "베이커리토큰": { "symbol": "CTSI" },
      "카르테시": { "symbol": "BAKE" },
      "렌": { "symbol": "REN" },
      "비너스": { "symbol": "XVS" },
      "팬케이크스왑": { "symbol": "CAKE" }, 
      "폴리곤": { "symbol": "MATIC" },
      "힙스": { "symbol": "HIBS" },
      "위드": { "symbol": "WIKEN" },
      "셀러네트워크": { "symbol": "CELR" },      
      "다이": { "symbol": "DAI" },      
      "바이낸스코인": { "symbol": "BNB" },     
      "링크플로우": { "symbol": "LF" },      
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
        "이브이지": { "symbol": "EVZ" },
        "더마이다스터치골드": { "symbol": "TMTG" },
        "옵저버": { "symbol": "OBSR" },
        "연파이낸스": { "symbol": "YFI" },
        "리니어파이낸스": { "symbol": "LINA" },
        "프로톤": { "symbol": "XPR" },
        "바이오패스포트": { "symbol": "BIOT" },
        "믹스마블": { "symbol": "MIX" },
        "다빈치": { "symbol": "DAC" },
        "퀸비": { "symbol": "QBZ" },
        "레저타임": { "symbol": "LM" },
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
        "코넌": { "symbol": "CON" },
        "월튼체인": { "symbol": "WTC" },
        "에이피엠코인": { "symbol": "APM" },
        "밸러토큰": { "symbol": "VALOR" },
        "세럼": { "symbol": "SRM" },
        "싸이클럽": { "symbol": "CYCLUB" },
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
        "라이파이낸스": { "symbol": "SOFI" },
        "맵프로토콜": { "symbol": "MAP" },        
        "플레타": { "symbol": "FLETA" },
        "너보스": { "symbol": "CKB" },
        "콜라토큰": { "symbol": "COLA" },
        "블로서리": { "symbol": "BLY" },
        "게이머코인": { "symbol": "GHX" },      
        "어셈블프로토콜": { "symbol": "ASM" },
        "아로와나": { "symbol": "ARW" },
        "미스블록":{ "symbol": "MSB" },
        "베라시티":{ "symbol": "VRA" },               
        "바이프로스트":{ "symbol": "BFC" },
        "이캐시":{"symbol":"XEC"},
        "솔라나":{"symbol":"SOL"},
        "벨로프로토콜":{"symbol":"VELO"},
        "울트라":{"symbol":"UOS"},
        "엑시인피니티":{"symbol":"AXS"},
        "링크":{"symbol":"LN"},
        "오아시스":{"symbol":"OAS_BTC"},
        "로아코어":{"symbol":"ROA_BTC"},
        "립체인":{"symbol":"REAP_BTC"},
        "엑스플라":{"symbol":"XPLA"},
        "라이브피어":{"symbol":"LPT"},
        "마이네이버엘리스":{"symbol":"ALICE"},
        "오션프로토콜":{"symbol":"OCEAN"},
        "리저브라이트":{"symbol":"RSR"},
        "크레딧코인":{"symbol":"CTC"},
        "코티":{"symbol":"COTI"},
        "갈라":{"symbol":"GALA"},
        "보바토큰":{"symbol":"BOBA"},
        "플로우":{'symbol':"FLOW"},
        "아비트럼":{'symbol':"ARB"}              
    },
     kucoin: {
       "터보스": { "symbol": "TURBOS-USDT" },
        "수이": { "symbol": "SUI-USDT" },
        "가리": { "symbol": "GARI-USDT" },
        "KCS": { "symbol": "KCS-USDT" },
        "쿠코인토큰": { "symbol": "KCS-USDT" },
        "문리버": { "symbol": "MOVR-USDT" },
        "텔코인": { "symbol": "TEL-USDT" },
        "퀀트": { "symbol": "QNT-USDT" },
        "스무스러브포션": { "symbol": "SLP-USDT" },
        "엘론드": { "symbol": "EGLD-USDT" },
        "인터넷컴퓨터": { "symbol": "ICP-USDT" },
        "ICP": { "symbol": "ICP-USDT" },
        "카데나": { "symbol": "KDA-USDT" },
        "오아시스네트워크": { "symbol": "ROSE-USDT" },
        "콰르데오": { "symbol": "QRDO-USDT" },
        "QRDO": { "symbol": "QRDO-USDT" },
        "렌더토큰": { "symbol": "RNDR-USDT" },
        "하서": { "symbol": "HTR-USDT" },
        "스콜로프": { "symbol": "SCLP-USDT" },
        "일론": { "symbol": "ELON-USDT" },
        "도질론마르스": { "symbol": "ELON-USDT" },
        "TRIAS": { "symbol": "TRIAS-USDT" },
        "트라이아스토큰": { "symbol": "TRIAS-USDT" },
        "크로미아": { "symbol": "CHR-USDT" },
        "XTM": { "symbol": "XTM-USDT" },
        "토럼": { "symbol": "XTM-USDT" },
        "나카모토게임즈": { "symbol": "NAKA-USDT" },
        "넘버프로토콜": { "symbol": "NUM-USDT" },
        "RMRK": { "symbol": "RMRK-USDT" },
        "XYO": { "symbol": "XYO-USDT" },
        "SHILL": { "symbol": "SHILL-USDT" },
        "쉴토큰": { "symbol": "SHILL-USDT" },
        "자스미코인": { "symbol": "JASMY-USDT" },
        "커브다오토큰": { "symbol": "CRV-USDT" },
        "FLUX": { "symbol": "FLUX-USDT" },
        "플럭스": { "symbol": "FLUX-USDT" },
        "DYDX": { "symbol": "DYDX-USDT" },
        "메타히어로": { "symbol": "HERO-USDT" },
        "PYR": { "symbol": "PYR-USDT" },
        "와일더월드": { "symbol": "WILD-USDT" },
        "슈퍼팜": { "symbol": "SUPER-USDT" },
        "EXRD": { "symbol": "EXRD-USDT" },
        "보손프로토콜": { "symbol": "BOSON-USDT" },
        "에일리언월드": { "symbol": "TLM-USDT" },
        "KOK": { "symbol": "KOK-USDT" },
        "콕": { "symbol": "KOK-USDT" },
        "ISP": { "symbol": "ISP-USDT" },
        "아이에스피오링크": { "symbol": "ISP-USDT" },
        "글릿치": { "symbol": "GLCH-USDT" },
        "프로톤": { "symbol": "XPR-USDT" },
        "드림즈퀘스트": { "symbol": "DREAMS-USDT" },
        "팬텀고": { "symbol": "FTG-USDT" },
        "FTG": { "symbol": "FTG-USDT" },
        "멀티VAC": { "symbol": "MTV-USDT" },
        "MTV": { "symbol": "MTV-USDT" },
        "파리버스": { "symbol": "PBX-USDT" },
        "레드폭스랩스": { "symbol": "RFOX-USDT" },   
        "일드길드게임즈": { "symbol": "YGG-USDT" },
        "SENSO": { "symbol": "SENSO-USDT" },
        "센소": { "symbol": "SENSO-USDT" },
        "파이어스타터": { "symbol": "FLAME-USDT" },
        "HAKA": { "symbol": "HAKA-USDT" },
        "트라이브원": { "symbol": "HAKA-USDT" },
        "LTO": { "symbol": "LTO-USDT" },
        "엘티오네트워크": { "symbol": "LTO-USDT" },
        "스트롱": { "symbol": "STRONG-USDT" },
        "아리브": { "symbol": "AR-USDT" },
        "FKX": { "symbol": "FKX-USDT" },
        "UNO": { "symbol": "UNO-USDT" },
        "클리어풀": { "symbol": "CPOOL-USDT" },
        "토르체인": { "symbol": "RUNE-USDT" },
        "우네트워크": { "symbol": "WOO-USDT" },
        "오퓰러스": { "symbol": "OPUL-USDT" },
        "어센트": { "symbol": "ACE-USDT" },
        "벤콰이": { "symbol": "QI-USDT" },
        "ZKT": { "symbol": "ZKT-USDT" },
        "CWAR": { "symbol": "CWAR-USDT" },
        "럭소": { "symbol": "LYxe-USDT" },
        "AI": { "symbol": "AI-USDT" },
        "SOUL": { "symbol": "SOUL-USDT" },
        "팬타스마": { "symbol": "SOUL-USDT" },
        "XDC": { "symbol": "XDC-USDT" },
        "NTVRK": { "symbol": "NTVRK-USDT" },
        "HAI": { "symbol": "HAI-USDT" },
        "오리진프로토콜": { "symbol": "OGN-USDT" },
        "KAI": { "symbol": "KAI-USDT" },
        "크릴": { "symbol": "KRL-USDT" },
        "코티": { "symbol": "COTI-USDT" },
        "ABBC": { "symbol": "ABBC-USDT" },
        "DAG": { "symbol": "DAG-USDT" },
        "콘스텔레이션": { "symbol": "DAG-USDT" },
        "유니젠": { "symbol": "ZCX-USDT" },
        "NFT": { "symbol": "NFT-USDT" },
        "APENFT": { "symbol": "NFT-USDT" },
        "REVV": { "symbol": "REVV-USDT" },
        "SOLR": { "symbol": "SOLR-USDT" },
        "솔라나레이저": { "symbol": "SOLR-USDT" },
        "로스레스": { "symbol": "LSS-USDT" },
        "얼라이언스블록": { "symbol": "ALBT-USDT" },
        "로스레스": { "symbol": "LSS-USDT" },
        "토코인": { "symbol": "TOKO-USDT" },
        "KEEP": { "symbol": "KEEP-USDT" },
        "킵네트워크": { "symbol": "KEEP-USDT" },
        "폴카브릿지": { "symbol": "PBR-USDT" },
        "문스타터": { "symbol": "MNST-USDT" },
        "VXV": { "symbol": "VXV-USDT" },
        "벨라스": { "symbol": "VLX-USDT" },
        "유니파이": { "symbol": "NIF-USDT" },
        "리베인": { "symbol": "REV-USDT" },
        "VELO": { "symbol": "VELO-USDT" },
        "벨로": { "symbol": "VELO-USDT" },
        "뉴스크립토": { "symbol": "NWC-USDT" },
        "시디파이펀드": { "symbol": "SFUND-USDT" },
        "유빅스네트워크": { "symbol": "UBX-USDT" },
        "버런시": { "symbol": "BUY-USDT" },
        "BUY": { "symbol": "BUY-USDT" },
        "WNCG": { "symbol": "WNCG-USDT" },
        "몬스타인피니티": { "symbol": "MONI-USDT" },
        "XCAD": { "symbol": "XCAD-USDT" },
        "엄브렐라네트워크": { "symbol": "UMB-USDT" },
        "디지비트스": { "symbol": "XDB-USDT" },
        "도라팩토리": { "symbol": "DORA-USDT" },
        "BEPRO": { "symbol": "BEPRO-USDT" },
        "AIOZ": { "symbol": "AIOZ-USDT" },
        "헤븐프로토콜": { "symbol": "XHV-USDT" },
        "SWASH": { "symbol": "SWASH-USDT" },
        "디파이체인": { "symbol": "DFI-USDT" },
        "TVK": { "symbol": "TVK-USDT" },
        "크로니클": { "symbol": "XNL-USDT" },
        "아발런치": { "symbol": "XAVA-USDT" },
        "API3": { "symbol": "API3-USDT" },
        "매트릭스AI네트워크": { "symbol": "MAN-USDT" },
        "에너지웹토큰": { "symbol": "EWT-USDT" },
        "게이머코인": { "symbol": "GHX-USDT" },
        "오파시티": { "symbol": "OPCT-USDT" },
        "아로리": { "symbol": "AURY-USDT" },
        "시루스파운데이션": { "symbol": "CIRUS-USDT" },
        "다오메이커": { "symbol": "DAO-USDT" },
        "베이커리토큰": { "symbol": "BAKE-USDT" },
        "클레버": { "symbol": "KLV-USDT" },
        "에르고": { "symbol": "ERG-USDT" },
        "퀵": { "symbol": "QUICK-USDT" },
        "아라곤": { "symbol": "ANT-USDT" },
        "루나클래식":{"symbol": "LUNC-USDT"},
        "루나" : {"symbol":"LUNA-USDT"}
    },
     binance: {
       "페페": { "symbol": "PEPE" },
       "플로키": { "symbol": "FLOKI" },
        "하이퍼캐시": { "symbol": "HC" },
        "멀티버스엑스": { "symbol": "EGLD" },
         "갤럭시": { "symbol": "GAL" },
        "앱토스": { "symbol": "APT" },
        "APT": { "symbol": "APT" },
        "FTT": { "symbol": "FTT" },
        "에프티엑스토큰": { "symbol": "FTT" },
        "ftx": { "symbol": "FTT" },
        "ftt": { "symbol": "FTT" },
        "리그오브킹덤": { "symbol": "LOKA" },
        "LOKA": { "symbol": "LOKA" },
        "만트라다오": { "symbol": "OM" },
        "OG": { "symbol": "OG" },
        "시아코인": { "symbol": "SC" },
        "젠캐시": { "symbol": "ZEN" },
        "완체인": { "symbol": "WAN" },
        "어거": { "symbol": "REP" },
        "펀페어": { "symbol": "FUN" },
        "에이다": { "symbol": "ADA" },
        "라이파이낸스" : {"symbol":"SOFI"},
        "시빅": { "symbol": "CVC" },
        "이오스": { "symbol": "EOS" },
        "칠리즈": { "symbol": "CHZ" },
        "컨플럭스": { "symbol": "CFX" },
        "썬": { "symbol": "SUN" },
        "온톨로지": { "symbol": "ONT" },
        "오키드": { "symbol": "OXT" },
        "이더리움클래식": { "symbol": "ETC" },
        "뉴비트쉐어": { "symbol": "NBS" },
        "비체인": { "symbol": "VEN" },
        "비체인토르": { "symbol": "VET" },
        "팍소스": { "symbol": "PAX" },
        "스타파이": { "symbol": "FIS" },
        "악티늄": { "symbol": "ACM" },
        "세이프팔": { "symbol": "SFP" },
        "릿엔트리": { "symbol": "LIT" },
        "트러스트 월렛": { "symbol": "TWT" },
        "비트토렌트": { "symbol": "BTT" },
        "너보스네트워크": { "symbol": "CKB" },
        "온톨로지가스": { "symbol": "ONG" },
        "홀로": { "symbol": "HOT" },
        "질리카": { "symbol": "ZIL" },
        "제로엑스": { "symbol": "ZRX" },
        "페치에이아이": { "symbol": "FET" },
        "베이직어텐션토큰": { "symbol": "BAT" },
        "모네로": { "symbol": "XMR" },
        "지캐시": { "symbol": "ZEC" },
        "트루파이": { "symbol": "TRU" },
        "인프라프레임워크": { "symbol": "RIF" },
        "AS로마": { "symbol": "ASR" },
        "아틀레티코마드리드": { "symbol": "ATM" },
        "오미세고": { "symbol": "OMG" },
        "바이낸스코인": { "symbol": "BNB" },
        "엔진코인": { "symbol": "ENJ" },
        "파리생제르맹": { "symbol": "PSG" },
        "유벤투스": { "symbol": "JUV" },
        "더그래프": { "symbol": "GRT" },
        "스케일네트워크": { "symbol": "SKL" },
        "하모니프로토콜": { "symbol": "ONE" },
        "팬텀": { "symbol": "FTM" },
        "넴": { "symbol": "XEM" },
        "트라발라": { "symbol": "AVA" },
        "기프토": { "symbol": "GTO" },
        "엘론드": { "symbol": "ERD" },
        "디스트릭트": { "symbol": "DNT" },
        "엑시인피티니": { "symbol": "AXS" },
        "써틱": { "symbol": "CTK" },
        "윈": { "symbol": "WIN" },
        "콘텐토스": { "symbol": "COS" },
        "인젝티브프로토콜": { "symbol": "INJ" },
        "파일코인": { "symbol": "FIL" },
        "메탈": { "symbol": "MTL" },
        "비너스": { "symbol": "XVS" },
        "유트러스트": { "symbol": "UTK" },
        "오리온프로토콜": { "symbol": "ORN" },
        "메인프레임": { "symbol": "MFT" },
        "셀프키": { "symbol": "KEY" },
        "플라밍고": { "symbol": "FLM" },
        "헬륨": { "symbol": "HNT" },
        "라이트코인": { "symbol": "LTC" },
        "리플": { "symbol": "XRP" },
        "일립시스": { "symbol": "EPS" },
        "스텔라": { "symbol": "XLM" },
        "트론": { "symbol": "TRX" },
        "아이콘": { "symbol": "ICX" },
        "이더리움": { "symbol": "ETH" },
        "테조스": { "symbol": "XTZ" },
        "리퍼블릭프로토콜": { "symbol": "REN" },
        "레이븐코인": { "symbol": "RVN" },
        "네오": { "symbol": "NEO" },
        "유니스왑": { "symbol": "UNI" },
        "엔케이엔": { "symbol": "NKN" },
        "스톡스": { "symbol": "STX" },
        "벨라토큰": { "symbol": "BEL" },
        "우마": { "symbol": "UMA" },
        "피오프로토콜": { "symbol": "FIO" },
        "아이젝": { "symbol": "RLC" },
        "모나코": { "symbol": "MCO" },
        "디아": { "symbol": "DIA" },
        "비트코인 캐시": { "symbol": "BCH" },
        "쿠사마": { "symbol": "KSM" },
        "텔러": { "symbol": "TRB" },
        "FTX토큰": { "symbol": "FTT" },
        "유로": { "symbol": "EUR" },
        "오리진프로토콜": { "symbol": "OGN" },
        "리저브라이트": { "symbol": "RSR" },
        "폴카닷": { "symbol": "DOT" },
        "뉴메레르": { "symbol": "NMR" },
        "커브": { "symbol": "CRV" },
        "아라곤": { "symbol": "ANT" },
        "토큰클럽": { "symbol": "TCT" },
        "와지르엑스": { "symbol": "WRX" },
        "비트쉐어": { "symbol": "BTS" },
        "리스크": { "symbol": "LSK" },
        "뱅코르": { "symbol": "BNT" },
        "엘티오네트워크토큰": { "symbol": "LTO" },
        "세럼": { "symbol": "SRM" },
        "저스트": { "symbol": "JST" },
        "코모도": { "symbol": "KMD" },
        "블루젤": { "symbol": "BLZ" },
        "밸런서": { "symbol": "BAL" },
        "연파이낸스": { "symbol": "YFI" },
        "무비블록": { "symbol": "MBL" },
        "호주달러": { "symbol": "AUD" },
        "디크레드": { "symbol": "DCR" },
        "다이": { "symbol": "DAI" },
        "메이커": { "symbol": "MKR" },
        "월튼체인": { "symbol": "WTC" },
        "스와이프": { "symbol": "SXP" },
        "피로": { "symbol": "XZC" },
        "솔라나": { "symbol": "SOL" },
        "파운드": { "symbol": "GBP" },
        "디지바이트": { "symbol": "DGB" },
        "크로미아": { "symbol": "CHR" },
        "신세틱스": { "symbol": "SNX" },
        "비트코인": { "symbol": "BTC" },
        "지엑스체인": { "symbol": "GXS" },
        "비트코인캣": { "symbol": "BCC" },
        "피네트워크": { "symbol": "PNT" },
        "메져러블데이터토큰": { "symbol": "MDT" },
        "루핑": { "symbol": "LRC" },
        "카이버네트워크": { "symbol": "KNC" },
        "오토": { "symbol": "AUTO" },
         "퀀텀": { "symbol": "QTUM" },
        "스톰엑스": { "symbol": "STMX" },
        "에이브": { "symbol": "LEND" },
        "컴파운드": { "symbol": "COMP" },
        "원화": { "symbol": "BKRW" },
        "루나": { "symbol": "LUNA" },
        "루나클래식" :{"symbol":"LUNC"},
        "드렙": { "symbol": "DREP" },
        "아더": { "symbol": "ARDR" },
        "팍소스골드": { "symbol": "PAXG" },
        "아이오타": { "symbol": "IOTA" },
        "랩드엔엑스엠": { "symbol": "WNXM" },
        "퍼페츄얼프로토콜": { "symbol": "PERP" },
        "바이트": { "symbol": "VITE" },
        "비토르": { "symbol": "VTHO" },
        "하이브": { "symbol": "HIVE" },
        "카르테시": { "symbol": "CTSI" },
        "스트리머": { "symbol": "DATA" },
        "에스티피": { "symbol": "STPT" },
        "말린프로토콜": { "symbol": "POND" },
        "널스": { "symbol": "NULS" },
        "팬케이크스왑": { "symbol": "CAKE" },
        "도도": { "symbol": "DODO" },
        "유에스디코인": { "symbol": "USDC" },
        "체인링크": { "symbol": "LINK" },
        "지코인": { "symbol": "FIRO" },
        "디센트럴랜드": { "symbol": "MANA" },
        "코티": { "symbol": "COTI" },
        "아이온": { "symbol": "AION" },
        "스테이블유에스디": { "symbol": "USDS" },
        "아이오에스티": { "symbol": "IOST" },
        "아이리스넷": { "symbol": "IRIS" },
        "셀러네트워크": { "symbol": "CELR" },
        "셀로": { "symbol": "CELO" },
        "대시": { "symbol": "DASH" },
        "나노코인": { "symbol": "NANO" },
        "리프파이낸스": { "symbol": "REEF" },
        "샌드박스": { "symbol": "SAND" },
        "미스릴": { "symbol": "MITH" },
        "베어": { "symbol": "BEAR" },
        "불": { "symbol": "BULL" },
        "펄": { "symbol": "PERL" },
        "트루USD": { "symbol": "TUSD" },
        "램프": { "symbol": "RAMP" },
        "리니어파이낸스": { "symbol": "LINA" },
        "디고파이낸스": { "symbol": "DEGO" },
        "비지엑스프로토콜": { "symbol": "BZRX" },
        "코스모스아톰": { "symbol": "ATOM" },
        "와이파이파이낸스": { "symbol": "YFII" },
        "트로이": { "symbol": "TROY" },
        "엘론드": { "symbol": "EGLD" },
        "코르텍스": { "symbol": "CTXC" },
        "토르체인": { "symbol": "RUNE" },
        "아이오텍스": { "symbol": "IOTX" },
        "알파체인": { "symbol": "ARPA" },
        "엔유에스디": { "symbol": "SUSD" },
        "알고랜드": { "symbol": "ALGO" },
        "오아시스 네트워크 로즈코인": { "symbol": "ROSE" },
        "유니파이 프로토콜": { "symbol": "UNFI" },
        "도지코인": { "symbol": "DOGE" },
        "하드프로토콜": { "symbol": "HARD" },
        "듀스크 네트워크": { "symbol": "DUSK" },
        "아크로폴리스": { "symbol": "AKRO" },
        "카바": { "symbol": "KAVA" },
        "윙스다오": { "symbol": "WING" },
        "앵커": { "symbol": "ANKR" },
        "펀디엑스": { "symbol": "NPXS" },
        "헤데라해시그래프": { "symbol": "HBAR" },
        "빔": { "symbol": "BEAM" },
        "바이낸스USD": { "symbol": "BUSD" },
        "밴드프로토콜": { "symbol": "BAND" },
        "아발란체": { "symbol": "AVAX" },
        "도크": { "symbol": "DOCK" },
        "독": { "symbol": "DOCK" },
        "니어프로토콜": { "symbol": "NEAR" },
        "에이브": { "symbol": "AAVE" },
        "토모체인": { "symbol": "TOMO" },
        "덴트": { "symbol": "DENT" },
        "쎄타토큰": { "symbol": "THETA" },
        "스트라티스": { "symbol": "STRAX" },
        "비트코인에스브이": { "symbol": "BCHSV" },
        "슈퍼팜": { "symbol": "SUPER" },
        "오디우스코인": { "symbol": "AUDIO" },
        "마이네이버엘리스": { "symbol": "ALICE" },
        "알파파이낸스랩": { "symbol": "ALPHA" },
        "스톰": { "symbol": "STORM" },
        "코코스": { "symbol": "COCOS" },
        "USD스테이블코인": { "symbol": "USDSB" },
        "스토리지": { "symbol": "STORJ" },
        "쎄타퓨엘": { "symbol": "TFUEL" },
        "웨이브": { "symbol": "WAVES" },
        "스트라티스": { "symbol": "STRAT" },
        "스시스왑": { "symbol": "SUSHI" },
        "폴리곤": { "symbol": "MATIC" },
        "오션프로토콜": { "symbol": "OCEAN" },
        "1인치": { "symbol": "1INCH" },
        "비트코인스탠다드해시레이트토큰": { "symbol": "BTCST" },
        "비트코인캐시에이비씨": { "symbol": "BCHABC" },
        "배저다오": { "symbol": "BADGER" },
        "토코": { "symbol": "TKO" },
        "클레이" : {"symbol": "KLAY"},
        "클레이튼" : {"symbol": "KLAY"},
        "시바이누" : {"symbol": "SHIB"},
        "갈라":{"symbol":"GALA"},
        "하모니":{'symbol':"ONE"},
        "미나":{'symbol':"MINA"},
        "이더리움네임서비스":{'symbol':"ENS"},
        "ENS":{'symbol':"ENS"},
        "시티코인":{'symbol':"CITY"},
        "클로버":{'symbol':"CLV"},
        "KP3R":{'symbol':"KP3R"},
        "호라이젠":{'symbol':"ZEN"},
        "ape":{'symbol':"APE"},
        "스테픈":{'symbol':"GMT"},
        "매직":{'symbol':"MAGIC"},
        "싱귤래리티넷":{'symbol':"AGIX"},
        "알위브":{'symbol':"AR"},
        "GNS":{'symbol':"GNS"},
        "게인즈네트워크":{'symbol':"GNS"},
        "프락스쉐어":{'symbol':"FXS"},
        "USDC":{'symbol':"USDC"},
        "usdc":{'symbol':"USDC"},
        "옵티미즘":{'symbol':"OP"},
        "CFX":{'symbol':"CFX"},
        "DYDX":{'symbol':"DYDX"},
        "dydx":{'symbol':"DYDX"},
        "미분":{'symbol':"DYDX"},
        "리도":{'symbol':"LDO"},
        "덱스":{'symbol':"DYDX"},
        "렌더토큰":{'symbol':"RNDR"},
        "컨플럭스":{'symbol':"CFX"},
        "마스크네트워크":{'symbol':"MASK"},
        "이뮤터블엑스":{'symbol':"IMX"},
        "쓰레스홀드":{'symbol':"T"},
         "플로우":{'symbol':"FLOW"},
         "루프링":{'symbol':"LRC"},
         "스페이스ID":{'symbol':"ID"},
         "아비트럼":{'symbol':"ARB"},
         "렌더네트워크":{'symbol':"RNDR"},
         "오픈캠퍼스":{'symbol':"EDU"},
         "수이":{'symbol':"SUI"}
    }
};
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
//////////////////////////////////////////마진거래관련 0603 유한빈추가 /////////////
    if (msg.substr(0, 1) == "!" && msg.indexOf("마진") !== -1) {
        var LongShortData = [];
        var times = msg.substring(
            1,
            msg.indexOf(" 마진", 0)
        );
        var searchType = types[times];
        var getData = Utils.parse("https://fapi.bybt.com/api/futures/longShortRate?timeType=" + searchType + "&symbol=BTC").body().text();
        var lsData = JSON.parse(getData).data[0];
        USD = getUsd();
        var ALongVol = numberToKorean(Math.floor((lsData.longVolUsd * USD) / 10000)*10000);
        var AShortVol = numberToKorean(Math.floor((lsData.shortVolUsd * USD) / 10000)*10000);
        LongShortData.push({"market": "평균", "longRate": lsData.longRate, "longVol": ALongVol, "shortRate": lsData.shortRate, "shortVol": AShortVol});
        for(var i=0; i<lsData.list.length; i++) {
            var LongVol = numberToKorean(Math.floor((lsData.list[i].longVolUsd * USD) / 10000)*10000);
            var ShortVol = numberToKorean(Math.floor((lsData.list[i].shortVolUsd * USD) / 10000)*10000);
            LongShortData.push({"market": lsData.list[i].exchangeName, "longRate": lsData.list[i].longRate, "longVol": LongVol, "shortRate": lsData.list[i].shortRate, "shortVol": ShortVol});
        }
        var msgs = "[비트코인 " + times + " 롱 & 숏 데이터]";
        for (var i=0; i<LongShortData.length; i++) {
            msgs += "\n\n[" + LongShortData[i]["market"] + "]";
            msgs += "\n# 롱 " + LongShortData[i]["longRate"].toFixed(2) + "% : " + LongShortData[i]["longVol"] +"원";
            msgs += "\n# 숏 " + LongShortData[i]["shortRate"].toFixed(2) + "% : " + LongShortData[i]["shortVol"] +"원";
        }
        replier.reply(msgs);
    }
 //////////////////////////////////////////마진거래관련끝 0603 유한빈추가 /////////////   
    if (arr_room.indexOf(room) == -1) {
        return false;
    }
    // 메시지 좌우 공백제거
    msg = msg.trim();
    var sp_msg = msg.split(" ");
    var command = null; // 명령어 캐치
    var value = null; // 파라미터 값 - 코인명
    var value2 = null; //파라미터값2 - 거래소명
    // /코인명 거래소명
    if (sp_msg.length == 1 && sp_msg[0].startsWith("/") == 1) {
        command = "ㅩ코인ㅹ";
        value = sp_msg[0].substring(1);
    } else if(sp_msg.length == 2 && sp_msg[0].startsWith("/") == 1){
        command = "ㅩ코인ㅹ";
        value = sp_msg[0].substring(1);
        value2 = sp_msg[1];
    }
     else {
        command = sp_msg[0]; // 명령어 캐치
        value = sp_msg[1]; // 파라미터 값
        if(sp_msg.length >2) {
            value2 = sp_msg[2]; // 파라미터 값
           }
    }
    //우진이의 김프계산
    var rtnStr = UpbitKPre(msg);
    if (rtnStr != null) {
        if (rtnStr == "N") {
            replier.reply("해당 코인은 존재하지 않습니다.");
        } else {
            replier.reply(rtnStr);
        }
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
            //거래소명을 안칠시
            if(value2 ==null) {
                 //거래소 순서대로
                for (var idx in market_list) {
                    market_name = market_list[idx];
                    uri_obj = api_uri[market_name];
                    if (market_name == "upbit" || market_name == "upbit_btc" ) {
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
            }
            else {                    
                 //거래소명 없을시
                if(!market_list_kr.hasOwnProperty(value2)){
                    replier.reply("없는 거래소입니다");
                    return;
                }
                else {
                    market_name = market_list_kr[value2];
                }
                uri_obj = api_uri[market_name];
                    if (market_name == "upbit" || market_name == "upbit_btc" ) {
                        //upbit에는 코인 리스트 가져오는 api가 있음
                        coin_list_obj = coin_list_upbit(uri_obj.base_uri, uri_obj.coin_list_uri);
                    } else {
                        //나머지 거래소에는 없음 @@@추후 찾거나 바꿈
                         coin_list_obj = coin_list_by_market[uri_obj.coin_list_uri];
                                          }
                                          //거래소에 코인이 있는지 확인
                                          coin_base = coin_check(market_name, value, coin_list_obj);                                                             
                                  }
                                 if (coin_base == false) {
                                      if(value2 ==null) {
                                           for (var idx in market_list) {
                               
                                               market_name = market_list[idx];
                                               uri_obj = api_uri[market_name];
                               
                                               if (market_name == "upbit"|| market_name == "upbit_btc" ) {
                                                   //upbit에는 코인 리스트 가져오는 api가 있음
                                                   coin_list_obj = coin_list_upbit(uri_obj.base_uri, uri_obj.coin_list_uri);
                                               } else {
                                                   //나머지 거래소에는 없음 @@@추후 찾거나 바꿈
                                                   coin_list_obj = coin_list_by_market[uri_obj.coin_list_uri];
                                               }
                               
                                               //거래소에 코인이 있는지 확인
                                               coin_base = coin_check_cho_true(market_name, cho(value), coin_list_obj);
                                               if (coin_base != false) {
                                                   //있으면
                                                   break;
                                               }
                                           }
                                      } else {
                                          //거래소명 없을시
                                          if(!market_list_kr.hasOwnProperty(value2)){
                                              replier.reply("없는 거래소입니다");
                                              return;
                                          }
                                          else {
                                              market_name = market_list_kr[value2];
                                          }
                                          uri_obj = api_uri[market_name];
                                              if (market_name == "upbit" || market_name == "upbit_btc" ) {
                                                  //upbit에는 코인 리스트 가져오는 api가 있음
                                                  coin_list_obj = coin_list_upbit(uri_obj.base_uri, uri_obj.coin_list_uri);
                                              } else {
                                                  //나머지 거래소에는 없음 @@@추후 찾거나 바꿈
                                                   coin_list_obj = coin_list_by_market[uri_obj.coin_list_uri];
                                               }
                                               //거래소에 코인이 있는지 확인
                                               coin_base = coin_check_cho_true(market_name, cho(value), coin_list_obj);                                                             
                                      }
                                   } 
                                     if (coin_base == false) {
                                      if(value2 ==null) {
                                           for (var idx in market_list) {
                               
                                               market_name = market_list[idx];
                                               uri_obj = api_uri[market_name];
                               
                                               if (market_name == "upbit"|| market_name == "upbit_btc" ) {
                                                   //upbit에는 코인 리스트 가져오는 api가 있음
                                                   coin_list_obj = coin_list_upbit(uri_obj.base_uri, uri_obj.coin_list_uri);
                                               } else {
                                                   //나머지 거래소에는 없음 @@@추후 찾거나 바꿈
                                                   coin_list_obj = coin_list_by_market[uri_obj.coin_list_uri];
                                               }
                               
                                               //거래소에 코인이 있는지 확인
                                               coin_base = coin_check_cho(market_name, cho(value), coin_list_obj);
                                               if (coin_base != false) {
                                                   //있으면
                                                   break;
                                               }
                                           }
                                      } else {
                                          //거래소명 없을시
                                          if(!market_list_kr.hasOwnProperty(value2)){
                                              replier.reply("없는 거래소입니다");
                                              return;
                                          }
                                          else {
                                              market_name = market_list_kr[value2];
                                          }
                                          uri_obj = api_uri[market_name];
                                              if (market_name == "upbit" || market_name == "upbit_btc" ) {
                                                  //upbit에는 코인 리스트 가져오는 api가 있음
                                                  coin_list_obj = coin_list_upbit(uri_obj.base_uri, uri_obj.coin_list_uri);
                                              } else {
                                                  //나머지 거래소에는 없음 @@@추후 찾거나 바꿈
                                                   coin_list_obj = coin_list_by_market[uri_obj.coin_list_uri];
                                               }
                                               //거래소에 코인이 있는지 확인
                                               coin_base = coin_check_cho(market_name, cho(value), coin_list_obj);                                                             
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
                          
                            if (command == "!강피") {
                                  var high = value;
                                  var low = value2;
                              
                                  replier.reply(makeFibonacciReply(command,fibonacci(low, high)));
                              }
                              if (command == "!약피") {
                                  var high = value2;
                                  var low = value;
                                  
                                  replier.reply(makeFibonacciReply(command,fibonacci(high, low)));
                              }
                               if (command == "!도미"){
                                  replier.reply("[도미넌스]\n" + getDomi());
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
                                  var search_map = new Map();
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
                              }
                              else if (market_name == "upbit_btc") {
                                  /**************************************** 업비트 btc ********************************************/
                                  var search_map = new Map();
                                  // 전체 코인 리스트에서 검색한 코인들 중 KRW마켓인것만 리스트에 추가
                                  for (var i = 0; i < coin_list_obj.length; i++) {
                                      if (coin_list_obj[i].korean_name.includes(value)) {
                                          if (coin_list_obj[i].market.split("-")[0] == "BTC") {
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
                                      /**************************************** 업비트 btc ********************************************/
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
                               //코인 체크
                          function coin_check_cho_true(market_name, value, coin_list_obj) {
                              //코인 symbol
                              var symbol = null;
                              //코인 kr_name
                              var name = null;
                              var test = null;
                              if (market_name == "upbit") {
                                  /**************************************** 업비트 ********************************************/
                                  var search_map = new Map();
                                  // 전체 코인 리스트에서 검색한 코인들 중 KRW마켓인것만 리스트에 추가
                                  for (var i = 0; i < coin_list_obj.length; i++) {
                                      test = coin_list_obj[i].korean_name;
                                      if (cho(test) == value) {
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
                              } else if (market_name == "upbit_btc") {
                                  /**************************************** 업비트 btc ********************************************/
                                  var search_map = new Map();
                                  // 전체 코인 리스트에서 검색한 코인들 중 KRW마켓인것만 리스트에 추가
                                  for (var i = 0; i < coin_list_obj.length; i++) {
                                      test = coin_list_obj[i].korean_name;
                                      if (cho(test) == value) {
                                          if (coin_list_obj[i].market.split("-")[0] == "BTC") {
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
                                  /**************************************** 업비트 btc ********************************************/
                              } else {
                                  /**************************************** other ********************************************/
                                  if (coin_list_obj.hasOwnProperty(value)) {
                                      name = value;
                                      symbol = coin_list_obj[value].symbol;
                                  } else {
                                      for (var k in coin_list_obj) {
                                          if (cho(k) == value) {
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
                              //코인 체크
                          function coin_check_cho(market_name, value, coin_list_obj) {
                              //코인 symbol
                              var symbol = null;
                              //코인 kr_name
                              var name = null;
                              var test = null;
                              if (market_name == "upbit") {
                                  /**************************************** 업비트 ********************************************/
                                  var search_map = new Map();
                                  // 전체 코인 리스트에서 검색한 코인들 중 KRW마켓인것만 리스트에 추가
                                  for (var i = 0; i < coin_list_obj.length; i++) {
                                      test = coin_list_obj[i].korean_name;
                                      if (cho(test).includes(value)) {
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
                              }else if (market_name == "upbit_btc") {
                                  /**************************************** 업비트 btc ********************************************/
                                  var search_map = new Map();
                                  // 전체 코인 리스트에서 검색한 코인들 중 KRW마켓인것만 리스트에 추가
                                  for (var i = 0; i < coin_list_obj.length; i++) {
                                      test = coin_list_obj[i].korean_name;
                                      if (cho(test).includes(value)) {
                                          if (coin_list_obj[i].market.split("-")[0] == "BTC") {
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
                                  /**************************************** 업비트 btc ********************************************/
                                   } else {
                                  /**************************************** other ********************************************/
                                  if (coin_list_obj.hasOwnProperty(value)) {
                                      name = value;
                                      symbol = coin_list_obj[value].symbol;
                                  } else {
                                      for (var k in coin_list_obj) {
                                          if (cho(k).indexOf(value) != -1) {
                                              name = k;
                                              symbol = coin_list_obj[k].symbol;
                                              break;
                                          }
                                      }
                                  }
                                  /**************************************** other ***********************************************/
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
                          
                              if (market_name == "upbit" || market_name == "upbit_btc") {
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
                                  change_rate = (coin_info_obj.data.closing_price - coin_info_obj.data.prev_closing_price) / coin_info_obj.data.prev_closing_price * 100;        
                              } else if (market_name == "kucoin") {
                                  trade_price = coin_info_obj.data.last;
                                  high_price = coin_info_obj.data.high;
                                  low_price = coin_info_obj.data.low;
                                  change_price = coin_info_obj.data.changePrice;
                                  change_rate = coin_info_obj.data.changeRate*100;
                          
                              } else if (market_name == "binance") {
                                  trade_price = coin_info_obj.lastPrice;
                                  high_price = coin_info_obj.highPrice;
                                  low_price = coin_info_obj.lowPrice;
                                  change_price = coin_info_obj.priceChange;
                                  change_rate = coin_info_obj.priceChangePercent;
                          
                              }
                              change_arrow = change_price == 0 ? "-" : change_price > 0 ? "▲" : "▼";
                          
                              return coin_info(market_name, coin_base.symbol, coin_base.name, trade_price, high_price, low_price, change_price, change_rate, change_arrow);
                          }
                          
                          //코인 정보
                          function coin_search(base_uri, info_uri, symbol) {
                              if (base_uri.indexOf("binance") != -1) {
                                 if(symbol == "LUNA" || symbol =="LUNC") {
                                     symbol +="BUSD";
                                                                } else {
                                                                  symbol += "USDT";
                                                                }                            
                                                             }
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
                                                             }  else if (market_name == "binance") {
                                                                 market_name = "바이낸스";
                                                             }  else if (market_name == "kucoin") {
                                                                 market_name = "쿠코인";
                                                             }  else if(market_name == "upbit_btc"){
                                                                 market_name = "업비트 btc마켓"
                                                             }
                                                             return_message =
                                                                 "[" + name + "]\n" +
                                                                 "￦ " + numberWithCommas(parseFloat(trade_price));
                                                         
                                                             if (market_name == "바이낸스" || market_name =="쿠코인") {
                                                                 return_message =
                                                                     "[" + name + "]\n" +
                                                                     "＄ " + numberWithCommas(parseFloat(trade_price));
                                                         
                                                             }  //빗썸 btc 처리
                                                             if (symbol.includes("_BTC")) {
                                                                 return_message =
                                                                     "[" + name + "]\n" +
                                                                     "₿ " + numberWithCommas(parseFloat(trade_price).toFixed(8));
                                                         
                                                             }
                                                             if (market_name == "업비트 btc마켓") {
                                                                 return_message =
                                                                     "[" + name + "]\n" +
                                                                     "₿ " + numberWithCommas(parseFloat(trade_price).toFixed(8));
                                                         
                                                             }
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
                                                                /***********************************************************/
                                                                 var Rate = exRate();
                                                                 return_message +=
                                                                     "\n＄ " + numberWithCommas(parseFloat(dollar)) +
                                                                 
                                                                     "\n(￦ " + numberWithCommas(parseInt(dollar * Rate)) + ")" +
                                                                     "\n김프(" + ((trade_price / (dollar * Rate)) * 100 - 100).toFixed(2) + "%)\n";
                                                          
                                                                     
                                                                     /* return_message +=
                                                                     "\n＄ " + numberWithCommas(parseFloat(dollar));
                                                         */                   
                                                             }
                                                               //btc 처리
                                                             if (symbol.includes("_BTC") || market_name == "업비트 btc마켓") {
                                                                 return_message +=
                                                                 "\n고가: " + (parseFloat(high_price).toFixed(8)) +
                                                                 "\n저가: " + numberWithCommas(parseFloat(low_price).toFixed(8)) +
                                                                 "\n" + change_arrow + " " + numberWithCommas(parseFloat(change_price).toFixed(8)) + "(" + parseFloat(parseFloat(change_rate).toFixed(2)) + "%)";
                                                             }
                                                             //btc제외 처리
                                                             else {
                                                                 return_message += 
                                                                     "\n고가: " + numberWithCommas(parseFloat(high_price)) +
                                                                     "\n저가: " + numberWithCommas(parseFloat(low_price)) +
                                                                     "\n" + change_arrow + " " + numberWithCommas(parseFloat(parseFloat(change_price).toFixed(4))) + "(" + parseFloat(parseFloat(change_rate).toFixed(2)) + "%)";
                                                             }
                                                         
                                                             //비트코인이랑 이더리움 도미 추가
                                                             // 20210531 권민재 !도미 명령어 추가로 인한 삭제
                                                            /* if (symbol == "BTC" || symbol == "btc" || symbol == "ETH" || symbol == "eth") {
                                                                 return_message +=
                                                                     "\n도미 : " + getDomi(symbol);
                                                             }
                                                         */
                                                         
                                                             return_message +=
                                                                 "\n\n" + market_name + " 기준";
                                                         
                                                             return return_message;
                                                         }
                                                             //도미넌스 가져오는 함수
                                                         /**
                                                          * history
                                                          * 20210422 권민재 fixed json.split
                                                          */
                                                         //도미넌스 가져오는 함수
                                                         function getDomi() {
                                                             var domi = null;
                                                         
                                                             var json = Utils.parse("https://coinmarketcap.com/ko/charts/").body().text();  
                                                             json = json.split("도미넌스: ")[1].split("ETH 가스:")[0];   
                                                             /*
                                                             if (symbol.toUpperCase() == "ETH") {
                                                                 domi = json.split(" ")[3];
                                                             } else {
                                                                 domi = json.split(" ")[1];
                                                             }
                                                             return domi;
                                                             */
                                                             btc_domi= json.split("%")[0] + "%";
                                                             eth_domi = json.split("%")[1] + "%";
                                                             
                                                             json = btc_domi + "\n" + eth_domi.trim();
                                                            return json;
                                                         }//환율
                                                         function exRate() {
                                                            // var ExRate = JSON.parse(Utils.parse("https://api.manana.kr/exchange/rate.json?base=KRW&code=USD").body().text());
                                                             var ExRate = 
                                                         JSON.parse(Utils.parse("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD").body().text());
                                                             return parseFloat(ExRate[0].basePrice);
                                                             //return parseFloat(ExRate[0].rate);
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
                                                         
                                                         // 문자열 초성으로 변환 
                                                         function cho(str) {
                                                             var res = "",
                                                                 // 초성으로 변환         
                                                                 choArr = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
                                                             for (var i in str) {
                                                                 code = Math.floor((str[i].charCodeAt() - 44032) / 588)
                                                                 res += code >= 0 ? choArr[code] : str[i];
                                                             }
                                                             return res;
                                                         }
                                                         function UpbitKPre(msg) {
                                                             msg.trim();
                                                             var command = msg.split(" ")[0];
                                                             var value = msg.split(" ")[1];
                                                             if (msg.split(" ").length == 2) {
                                                                 if (command == "!김프") {
                                                                     var coin_list = Utils.getWebText("https://api.upbit.com/v1/market/all");
                                                                     var coin_list_json = coin_list.replace(/<[^>]+>/g, "").trim();
                                                                     const coin_list_obj = JSON.parse(coin_list_json);
                                                         
                                                                     // 최종 검색 심볼과 이름
                                                                     var symbol = null;
                                                                     var name = null;
                                                         
                                                                     var search_map = new Map();
                                                                     // 전체 코인 리스트에서 검색한 코인들 중 KRW마켓인것만 리스트에 추가
                                                                     for (var i = 0; i < coin_list_obj.length; i++) {
                                                                         if (coin_list_obj[i].korean_name.includes(value)) {
                                                                             if (coin_list_obj[i].market.split("-")[0] == "KRW") {
                                                                                 search_map.set(
                                                                                     coin_list_obj[i].korean_name,
                                                                                     coin_list_obj[i].market.split("-")[1]
                                                                                 );
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
                                                                             name = search_map.keys().next().value;
                                                                             symbol = search_map.values().next().value;
                                                                         }
                                                                     } else {
                                                                         return "N";
                                                                     }
                                                         
                                                                     // 해당 심볼 코인 시세 조회
                                                                     var coin_info = Utils.getWebText(
                                                                         "https://api.upbit.com/v1/ticker?markets=krw-" + symbol
                                                                     );
                                                                      var coin_info_json = coin_info.replace(/(<([^>]+)>)/gi, "").trim();
                                                                     const coin_info_obj = JSON.parse(coin_info_json);
                                                         
                                                                     var dollar = 0.0;
                                                                     var coin_info_dollar = Utils.getWebText(
                                                                         "https://api.binance.com/api/v1/ticker/24hr?symbol=" + symbol + "USDT"
                                                                     );
                                                                     var coin_info_json_dollar = coin_info_dollar
                                                                         .replace(/(<([^>]+)>)/gi, "")
                                                                         .trim();
                                                                     const coin_info_obj_dollar = JSON.parse(coin_info_json_dollar);
                                                                     dollar = coin_info_obj_dollar.lastPrice;
                                                         
                                                                  /*   var ExRate = Utils.getWebText(
                                                                         "https://api.manana.kr/exchange/rate.json?base=KRW&code=USD"
                                                                     )
                                                                         .replace(/(<([^>]+)>)/gi, "")
                                                                         .trim();
                                                                     const coin_info_obj_rate = JSON.parse(ExRate);
                                                                     var Rate = coin_info_obj_rate[0].rate;
                                                         */
                                                                     
                                                                     var ExRate = JSON.parse(Utils.parse("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD").body().text());
                                                                     const coin_info_obj_rate = ExRate;
                                                                     var Rate = coin_info_obj_rate[0].basePrice;
                                                         
                                                         
                                                                     var usdt_to_usd =
                                                                         "https://walletinvestor.com/converter/tether/usd/1";
                                                                     var usdt_exchange =
                                                                         org.jsoup.Jsoup.connect(usdt_to_usd)
                                                                             .get()
                                                                             .select(
                                                                                 "body > div.wrap > div > div.converter > div.converter-title-details > h2 > strong > span"
                                                                             ) + "";
                                                                      usdt_exchange = usdt_exchange.replace(/(<([^>]+)>)/gi, "");
                                                                     dollar = dollar * usdt_exchange;
                                                                     var tradePrice = coin_info_obj[0].trade_price;
                                                                     var kimchi = ((tradePrice / (dollar * Rate)) * 100 - 100).toFixed(2);
                                                                     if (isNaN(kimchi)) {
                                                                         kimchi = "No Data";
                                                                     }
                                                         
                                                                     var rtnStr = String.format(
                                                                         "[{0}]\n￦ {1}\n김프: {2}%",
                                                                         name,
                                                                         numberWithCommas(tradePrice),
                                                                         kimchi
                                                                     );
                                                         
                                                                     return rtnStr;
                                                                 }
                                                                 return null;
                                                             }
                                                             return null;
                                                         }
                                                         String.format = function () {
                                                             let args = arguments;
                                                             return args[0].replace(/{(\d+)}/g, function (match, num) {
                                                                 num = Number(num) + 1;
                                                                 return typeof args[num] != undefined ? args[num] : match;
                                                             });
                                                         };
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
                                                           피보나치 차트 계산        [!강피 high = b low = a]
                                                                                    [!약피 high = a low = b] 
                                                           histort - 권민재 20210524 최초제작
                                                                 -
                                                         ////////////////////////////////////*/
                                                         function fibonacci(a, b){
                                                             var result = [];
                                                             var coefficient = [0, 0.236, 0.382, 0.50, 0.628, 0.764, 1.00, 1.382];
                                                            
                                                             for(var i in coefficient){
                                                                 result.push(numberWithCommas(b - (b-a)*coefficient[i]));
                                                             }
                                                         
                                                             return_obj = {};
                                                             return_obj.result = result;
                                                             return_obj.co = coefficient;
                                                         
                                                             return return_obj;
                                                         }
                                                         function makeFibonacciReply(command ,return_obj){
                                                             var result = [];
                                                             var coefficient = [];
                                                         
                                                             var reply_str = "";
                                                             if(command == "!강피"){
                                                                 reply_str += "[상승추세]\n"
                                                         result = return_obj.result;
                                                             coefficient = return_obj.co;
                                                             }else if(command == "!약피"){
                                                                 reply_str += "[하락추세]\n"
                                                         result = return_obj.result.reverse();
                                                             coefficient = return_obj.co.reverse();
                                                             }
                                                         
                                                             for(var i in coefficient){
                                                                 var percent = (coefficient[i] * 100).toFixed(1) + "%";
                                                                 reply_str += percent;
                                                                 reply_str += " : ";
                                                                 reply_str += result[i];
                                                                 if(i == coefficient.length-1){
                                                                     break;
                                                                 }
                                                                 reply_str += "\n";
                                                             }
                                                             return reply_str;
                                                         }
                                                         
                                                         function getUsd() {
                                                             var usdDatas = Utils.parse("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD").body().text();
                                                             var jUsdData = JSON.parse(usdDatas);
                                                         
                                                             return jUsdData[0].basePrice;
                                                         }
                                                         
                                                         function numberToKorean(number){
                                                             var inputNumber  = number < 0 ? false : number;
                                                             var unitWords    = ['', '만', '억', '조', '경'];
                                                             var splitUnit    = 10000;
                                                             var splitCount   = unitWords.length;
                                                             var resultArray  = [];
                                                             var resultString = '';
                                                         
                                                             for (var i = 0; i < splitCount; i++){
                                                                 var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
                                                                 unitResult = Math.floor(unitResult);
                                                                 if (unitResult > 0){
                                                                     resultArray[i] = unitResult;
                                            }
                                        }
                                    
                                        for (var i = 0; i < resultArray.length; i++){
                                            if(!resultArray[i]) continue;
                                            resultString = String(resultArray[i]) + unitWords[i] + resultString;
                                        }
                                    
                                        return resultString;
                                    }