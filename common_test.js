//number에 3자리 마다 , 찍는 format 추가
Number.prototype.format = function(){
    if(this==0) return 0;
 
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (this + '');
 
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
 
    return n;
};
 
// 문자열 타입에서 쓸 수 있도록 format() 함수 추가
String.prototype.format = function(){
    var num = parseFloat(this);
    if( isNaN(num) ) return "0";
 
    return num.format();
};

//환율
function exRate(){
    var ExRate = JSON.parse(Utils.parse("https://api.manana.kr/exchange/rate.json?base=KRW&code=USD").body().text());
    return parseFloat(ExRate[0].rate);
}