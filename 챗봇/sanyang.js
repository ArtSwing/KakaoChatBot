const scriptName = "Bobbot_Master.js";
const room_name = ["포니"];

const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule;

Kakao.init('26742f296b594d60205174fa325ea627');  // js키
Kakao.login('hbyoo94@naver.com', 'dlakstn1@@');  //카링을 보낼 계정의 카카오계정(이메일 또는 전화번호)과 비밀번호 입력

const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const Command = {};


Command.output = function (msg) { 

    var output_question = msg.replace('!', '').split(' ');
    var dir = '';

    for (i = 0; i < output_question.length; i++) {
        dir += '/';
        dir += output_question[i];
    }

    var file = new java.io.File(sdcard + '/bobbot/data' + dir + '.txt');
    if (!(file.exists())) {
        return '잘못된 값입니다.';
    }
    var fis = new java.io.FileInputStream(file);
    var isr = new java.io.InputStreamReader(fis);
    var br = new java.io.BufferedReader(isr);
    var str = br.readLine();

    var line = "";
    while ((line = br.readLine()) !== null) {
        str += "\n" + line;
    }

    fis.close();
    isr.close();
    br.close();
    return str;
};



function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {

    
    if (room_name.indexOf(room) != -1 && msg == ('!도움말')) {
        var data = Command.output("도움말 도움말");
        replier.reply(data);
    }
   

    if (room_name.indexOf(room) != -1 && msg.indexOf('!링크 ') != -1) {
        
        var option = msg.split(' ');
        option[1] = option[1].replace('혀로', '히어로');
        option[1] = option[1].replace('닼나', '다크나이트');
        option[1] = option[1].replace('캐슈', '캐논슈터');
        option[1] = option[1].replace('보마', '보우마스터');
        option[1] = option[1].replace('패파', '패스파인더');
        option[1] = option[1].replace('나로', '나이트로드');
        option[1] = option[1].replace('듀블', '듀얼블레이드');
        option[1] = option[1].replace('소마', '소울마스터');
        option[1] = option[1].replace('플위', '플레임위자드');
        option[1] = option[1].replace('윈브', '윈드브레이커');
        option[1] = option[1].replace('나워', '나이트워커');
        option[1] = option[1].replace('데벤져', '데몬어벤져');
        option[1] = option[1].replace('데슬', '데몬슬레이어');
        option[1] = option[1].replace('배메','배틀메이지');
         option[1] = option[1].replace('블래', '블래스터');
        option[1] = option[1].replace('메카', '메카닉');
        option[1] = option[1].replace('와헌', '와일드헌터');
        option[1] = option[1].replace('메세', '메르세데스');
        option[1] = option[1].replace('루미', '루미너스');
        option[1] = option[1].replace('엔버', '엔젤릭버스터');
        option[1] = option[1].replace('키네', '키네시스');
        option[1] = option[1].replace('메엠', '메이플M');

       
        if (option.length > 2) {
            replier.reply("잘못된 명령어입니다.");
        }

        var data = Command.output('링크 링크');
        var arr_data = data.split('\n\n');
        for (var idx = 0; idx < arr_data.length; idx++) {
         
            if (arr_data[idx].indexOf(option[1]) != -1) {
                replier.reply(arr_data[idx]);
                break;
            }
        }
    }
if(room_name.indexOf(room)!=-1 && msg.indexOf('!레벨 ') != -1){
  var level=msg.split(' ');
  
  if(level[2] < 10 && level[2] > 275){
     replier.reply('레벨은 숫자 10~275 사이로 입력해주세요');
  }

  url = Utils.getWebText("https://maplestory.nexon.com/Ranking/World/Total?c="+level[1]);
  if(url.indexOf('랭킹정보가 없습니다.') != -1){
    url = Utils.getWebText("https://maplestory.nexon.com/Ranking/World/Total?c="+level[1]+"&w=254");
  }
  if(url.indexOf('랭킹정보가 없습니다.') != -1){
    replier.reply('랭킹정보가 없습니다.');
    return;
  }

  url = url.toLowerCase();
  url = url.split('" alt="">'+level[1].toLowerCase()+'</a>')[1].split('</tr>')[0].replace(/(<([^>]+)>)/g,"");
  url = url.replace(/ /gi, '').replace(/\n\n\n/gi, '');
  url = url.split("lv.")[1];

  var char_lv = Number(url.split("\n")[0]);
  var char_ex = Number(url.split("\n")[1].replace(/,/gi, ''));

  if(char_lv==275){
    replier.reply('[' + level[1] + ']\nLv.'+ char_lv);
    return;
  }

  var lev_data=Command.output("레벨 레벨");
  var current_req_up = Number(lev_data.split(char_lv+'/')[1].split('\n')[0]) - Number(lev_data.split(char_lv-1+'/')[1].split('\n')[0]);
  var percentage = (char_ex/current_req_up*100).toFixed(2);
  var req_275=86473581694366-Number(lev_data.split(char_lv-1+'/')[1].split('\n')[0])-char_ex;
  var req_250=9654369842497-Number(lev_data.split(char_lv-1+'/')[1].split('\n')[0])-char_ex;   
  req_275=(req_275/1000000000000).toFixed(4).replace('.','조')+'억';
  req_250=(req_250/1000000000000).toFixed(4).replace('.','조')+'억';
  
  var strReply = '[' + level[1] + ']\n'
             + 'Lv.'+ char_lv +' ('+ percentage + '%)\n';

var per_ten = percentage.substr(0,1);
 var per_cnt = per_ten;

  for(var i = 0; i < 10; i++){
     if(per_cnt > 0 && Number(percentage) >= 10){
        strReply += '■';
     }else{
        if(per_cnt == 0 && Number(percentage) - (per_ten*10) >= 8){
            strReply += '■';
        }else{
            strReply += '□';
        }
     }
     per_cnt = per_cnt - 1;
  }
  if(level.length == 3){
     if(!isNumeric(level[2])) {
     replier.reply("레벨에는 숫자만 입력해주세요");
     return;
 }
   if(Number(level[2]) < Number(char_lv)){
      replier.reply('조회 레벨이' + level[1] + ' 레벨보다 낮습니다');
      return;
   }
   if(Number(level[2]) == Number(char_lv)){
      replier.reply('조회 레벨이' + level[1] + ' 레벨과 같습니다');
      return;
   }
     var target_lv_req_up = Number(lev_data.split(level[2]-1+'/')[1].split('\n')[0]) - Number(lev_data.split(char_lv-1+'/')[1].split('\n')[0]) - char_ex;
   var strNextReqUp = numberToKorean(target_lv_req_up);
   
   strReply += '\n\nLv.' + level[2] + ' 까지\n' + strNextReqUp + '\n';
   
  }else if(level.length == 2){
     var next_req_up = current_req_up - char_ex;
     var strNextReqUp = numberToKorean(next_req_up);
     
     strReply += '\n\nLv.' + (Number(char_lv)+1) + ' 까지\n' + strNextReqUp + '\n';
  }
  else return;
 
  if(char_lv<250){
     strReply += '\nLv.250까지 ' + req_250 + '\n';
  }
  
  strReply += 'Lv.275까지 ' + req_275;
  replier.reply(strReply);
  return;
}
if (room_name.indexOf(room) != -1 && msg.indexOf('!무릉 ') != -1) {
        var murung = msg.split(' ');
        var url = Utils.getWebText("https://maple.gg/u/" + murung[1]);
        if (url.indexOf('검색결과가 없습니다.') != -1) {
            replier.reply('[' + murung[1] + ']\n' + '존재하지 않는 캐릭터 입니다.');
            return;
        }

       replier.reply(url);
        var data = url.split('text-white">')[3].split('더시드')[0].replace(/(<([^>]+)>)/g, "");
        data = data.replace(/ /gi, '');
        data = data.replace(/\n/gi, '');

        if (data.indexOf('기록이없습니다.') != -1) {
            replier.reply('[' + murung[1] + ']\n' + '기록이 없습니다');
            return;
        } else {
            var info = data.split('초')[1].split('월드')[0];
            var floor = data.split('록')[1].split('층')[0];
            var time = data.split('층')[1].split('Lv')[0];
            var date = data.split('기준일:')[1];

            replier.reply('[' + murung[1] + ']\n' + info + '\n기록: ' + floor + '층\n시간: ' + time + '\n날짜: ' + date);
        }
    }

if (room_name.indexOf(room) != -1 && msg.indexOf('!사냥터 ') != -1) {

    var lev = msg.split(' ');

     if (!isNumeric(lev[1])) {
        replier.reply("레벨에는 숫자만 입력해주세요");
        return;
     }
     if(lev[1] < 10) {
        replier.reply("10이상의 숫자를 적어주세요.");
        return;
     }
     if(lev[1] >200) {
       replier.reply("200이하의 숫자를 적어주세요.");
       return;
     }

     //메모장에서 가져옴 경로 사냥터 밑에 사냥터
     var data = Command.output("사냥터 사냥터");
     var spl_data = data.split('#'); // #으로 나눈 data 10\n머쉬맘오솔길\n에델..
     for (var i = 0; i < spl_data.length; i++) {
      var target_data = spl_data.split('\n'); //10,머쉬맘오솔길,에델슈타인...
      var calc_data = (Number(target_data[0]) - Number(lev[1])); //10 - 16 or 20 - 16 ..이런식
      if(calc_data>=-9 && calc_dataj< 0 ) j{  
        for (var j = 0; j < target_data.length; j++) {
             replier.reply(target_data[j]+"\n");
        }
       

     }

     lev[1]
     

 




      

        var murung = msg.split(' ');
        var url = Utils.getWebText("https://maple.gg/u/" + murung[1]);
        if (url.indexOf('검색결과가 없습니다.') != -1) {
            replier.reply('[' + murung[1] + ']\n' + '존재하지 않는 캐릭터 입니다.');
            return;
        }

       replier.reply(url);
        var data = url.split('text-white">')[3].split('더시드')[0].replace(/(<([^>]+)>)/g, "");
        data = data.replace(/ /gi, '');
        data = data.replace(/\n/gi, '');

        if (data.indexOf('기록이없습니다.') != -1) {
            replier.reply('[' + murung[1] + ']\n' + '기록이 없습니다');
            return;
        } else {
            var info = data.split('초')[1].split('월드')[0];
            var floor = data.split('록')[1].split('층')[0];
            var time = data.split('층')[1].split('Lv')[0];
            var date = data.split('기준일:')[1];

            replier.reply('[' + murung[1] + ']\n' + info + '\n기록: ' + floor + '층\n시간: ' + time + '\n날짜: ' + date);
        }
    }




 if (room_name.indexOf(room) != -1 && msg.indexOf('!방무 ') != -1) {
        var numbers = msg.replace('!방무 ', '').split(' ');
        var monster = numbers[0];
        var num = 1;

        if (numbers.length < 2) {
            replier.reply('두개 이상의 수를 넣어야 합니다.');
            return;
        }
        for (i = 1; i < numbers.length; i++) {
            if (numbers[i] > 0 && numbers[i] < 100) {
                for (i = 1; i < numbers.length; i++) {
                    numbers[i] = (1 - numbers[i] / 100);
                    num *= numbers[i];
                }
                num = ((1 - num) * 100).toFixed(2);
                var boss_damage = ((1 - ((1 - num / 100) * monster / 100)) * 100).toFixed(2);
                if (boss_damage <= 0) {
                    boss_damage = 0;
                }
                replier.reply('총합방무:' + num + '%\n방어율' + monster + '% 보스에게딜량:' + boss_damage + '%');
            } else {
                replier.reply('입력한 값이 잘못되었습니다.');
            }
      }
    }
    if (room_name.indexOf(room) != -1 && msg.indexOf('!시드 ') != -1) {
        var seed = msg.split(' ');
        var url = Utils.getWebText("https://maple.gg/u/" + seed[1]);
        if (url.indexOf('검색결과가 없습니다.') != -1) {
            replier.reply('[' + seed[1] + ']\n' + '존재하지 않는 캐릭터 입니다.');
            return;
        }

        var data = url.split('bg-yellow-green">')[1].split('유니온')[0].replace(/(<([^>]+)>)/g, "");
        data = data.replace(/ /gi, '');
        data = data.replace(/\n/gi, '');

        if (data.indexOf('기록이없습니다.') != -1) {
            replier.reply('[' + seed[1] + ']\n' + '기록이 없습니다');
            return;
        } else {
            var info = data.split('초')[1].split('월드')[0];
            var floor = data.split('록')[1].split('층')[0];
            var time = data.split('층')[1].split('Lv')[0];
            var date = data.split('기준일:')[1];

            replier.reply('[' + seed[1] + ']\n' + info + '\n기록: ' + floor + '층\n시간: ' + time + '\n날짜: ' + date);
        }
    }
     if (room_name.indexOf(room) != -1 && msg.indexOf('!심볼 ') != -1) {
        msg = msg.replace('!심볼 ', '');
        var symbol = msg.split(' ');
        var total_req = 0;
        var total_meso = 0;
        var total_meso2 = 0;

        if (symbol.length != 2) {
            replier.reply('두개의 수를 입력해야 합니다.');
            return;
        }

        for (i = 0; i < 2; i++) {
            if (symbol[i] < 1 || symbol[i] > 20) {
                replier.reply('1~20의 수를 입력해야 합니다.');
                return;
            }
        }

        for (i = Number(symbol[0]); i < Number(symbol[1]); i++) {
            total_req += i * i + 11;
            total_meso += 12440000 + 6600000 * i;
            total_meso2 += 2370000 + 7130000 * i;
        }
  total_meso = total_meso.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        total_meso2 = total_meso2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        replier.reply(symbol[0] + '에서 ' + symbol[1] + '레벨까지\n요구량:' + total_req + '\n합메소:' + total_meso + '메소\n여로   :' + total_meso2 + '메소');
    }
      if (room_name.indexOf(room) != -1 && msg.indexOf('!유니온 ') != -1) {
        var union = msg.split(' ');
        var url = Utils.getWebText("https://maple.gg/u/" + union[1]);
        if (url.indexOf('검색결과가 없습니다.') != -1) {
            replier.reply('[' + union[1] + ']\n' + '존재하지 않는 캐릭터 입니다.');
            return;
        }

        var data = url.split('bg-yellow">')[1].split('업적')[0].replace(/(<([^>]+)>)/g, "");
        data = data.replace(/ /gi, '');
        data = data.replace(/\n/gi, '');

        if (data.indexOf('기록이없습니다.') != -1) {
            replier.reply('[' + union[1] + ']\n' + '기록이 없습니다.');
            return;
        } else {
            var grade = data.split('유니온')[1].split('Lv')[0];
            var level = data.split('Lv.')[1].split('전투력')[0];
            var power = data.split('전투력')[1].split('월드랭킹')[0];
            var coin = power.replace(/,/gi, '');
            coin = Math.floor(coin * 0.000000864);

        }
        replier.reply('[' + union[1] + ']\n' + grade + '(Lv.' + level + ')\n전투력: ' + power + '\n일일코인 수급량: ' + coin);
    }
    if (room_name.indexOf(room) != -1 && msg.indexOf('!추옵 ') != -1) {
        var option = msg.split(' ');
        if (option[1] == '파프니르' || option[1] == '앱솔랩스' || option[1] == '아케인셰이드' || option[1] == '네크로' || option[1] == '반레온' || option[1] == '쟈이힌' || option[1] == '여제' || option[1] == '우트가르드' || option[1] == '자쿰' || option[1] == '제네시스') {
            option[1] = option[1].replace('파프니르', '파프');
            option[1] = option[1].replace('앱솔랩스', '앱솔');
            option[1] = option[1].replace('아케인셰이드', '아케인');
        }
        if (option.length == 3) {
            option[2] = option[2].toUpperCase();
        }
        if (option[1] == '제로') {
            replier.reply(Command.output(option[0] + ' ' + option[1]));
            return;
        }
        if (option[1] == '해카세') {
            replier.reply(Command.output(option[0] + ' ' + option[1]));
            return;
        }
        var data = Command.output(option[0] + ' ' + option[1]);
        if (data.indexOf('*' + option[2] + '\n') == -1) {
            replier.reply(data);
            return;
        }
        var str = data.split('*' + option[2] + '\n')[1].split('\n\n')[0];
        replier.reply(str);
    }
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
function isNumeric(num, opt){
  // 좌우 trim(공백제거)을 해준다.
  num = String(num).replace(/^\s+|\s+$/g, "");
 
  if(typeof opt == "undefined" || opt == "1"){
    // 모든 10진수 (부호 선택, 자릿수구분기호 선택, 소수점 선택)
    var regex = /^[+\-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
  }else if(opt == "2"){
    // 부호 미사용, 자릿수구분기호 선택, 소수점 선택
    var regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
  }else if(opt == "3"){
    // 부호 미사용, 자릿수구분기호 미사용, 소수점 선택
    var regex = /^[0-9]+(\.[0-9]+)?$/g;
  }else{
    // only 숫자만(부호 미사용, 자릿수구분기호 미사용, 소수점 미사용)
    var regex = /^[0-9]$/g;
  }
 
  if( regex.test(num) ){
    num = num.replace(/,/g, "");
    return isNaN(num) ? false : true;
  }else{ return false;  }
}

