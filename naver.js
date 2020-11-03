const scriptName="naver.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
  var cmd = msg.split(" ")[0];
	var data5 = msg.replace(cmd + " ", "");
	if (cmd == "!검색") {
    replier.reply("네이버에 검색한 결과입니다.\n" + "https://m.search.naver.com/search.naver?query=" + data5.replace(/ /g, "%20"));
	}
}

function onStartCompile(){
    /*컴파일 또는 Api.reload호출시, 컴파일 되기 이전에 호출되는 함수입니다.
     *제안하는 용도: 리로드시 자동 백업*/
    
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState,activity) {
    var layout=new android.widget.LinearLayout(activity);
    layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    var txt=new android.widget.TextView(activity);
    txt.setText("액티비티 사용 예시입니다.");
    layout.addView(txt);
    activity.setContentView(layout);
}
function onResume(activity) {}
function onPause(activity) {}
function onStop(activity) {}