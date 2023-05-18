function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

var ssap = msg.substr(4);

try{
if(msg.startsWith("!계산 ")){
if(msg.indexOf("+") != -1){
var a = ssap.split("+");
var b = Number(a[0])+Number(a[1]);
replier.reply(numberWithCommas(b));
}
}
if(msg.startsWith("!계산 ")){
if(msg.indexOf("-") != -1){
var c = ssap.split("-");
var d = Number(c[0])-Number(c[1]);
replier.reply(numberWithCommas(d));
}
}
if(msg.startsWith("!계산 ")){
if(msg.indexOf("*") != -1){
var e = ssap.split("*");
var f = Number(e[0])*Number(e[1]);
replier.reply(numberWithCommas(f));
}
}
if(msg.startsWith("!계산 ")){
if(msg.indexOf("/") != -1){
var g = ssap.split("/");
var h = Number(g[0])/Number(g[1]);
replier.reply(numberWithCommas(h));
}
}
}
catch(e){
replier.reply("계산불가");
}
}
function numberWithCommas(x) {
    //return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (x == 0 || isNaN(x)) return 0;

    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (x + '');

    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

    return n;
}