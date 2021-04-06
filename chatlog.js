FS = FileStream
path = "sdcard/chatreport/chats"
all = "All_Room_Chats"
L = "-".repeat(40)
Lw = "\u200b".repeat(500)

back = true
admins = ["유한빈","오태윤"]

function response (room, msg, sender, _, replier) {

try {

if (!FS.read(path)) FS.write(path, "{}");

if (msg) {

json = JSON.parse(FS.read(path))

json[room] == undefined&&(json[room] = []);

json[all] == undefined&&(json[all] = []);

msg = msg.replace(/\u202E/g, "")

sender = sender.replace(/\u202E/g, "")

json[room].push(sender+" : "+msg+"\n\n("+new Date().toLocaleString().split("일 ")[1].split(" G")[0]+")")

json[all].push("방 : "+room+" ("+(room==sender?"개인챗":"그룹챗")+")\n\n"+sender+" : "+msg+"\n\n("+new Date().toLocaleString().split("일 ")[1].split(" G")[0]+")")

FS.write(path, JSON.stringify(json))

}

//채팅 보기 (사람)

if (msg.startsWith("!채팅보기")) {

send = msg.substr(5).trim()

if ((JSON.parse(FS.read(path))[all].filter(a=>a.split("\n\n")[1].split(" : ")[0].trim() == send)).length!=0) {

sendchat = JSON.parse(FS.read(path))[all].filter(a=>a.split("\n\n")[1].split(" : ")[0].trim() == send)

if (!back) {

rep = L+"\n\n"+sendchat.join("\n\n"+L+"\n\n")+"\n\n"+L

} else {

rep = L+"\n\n"+sendchat.reverse().join("\n\n"+L+"\n\n")+"\n\n"+L

}

replier.reply("[!] '"+send+"' 님의 채팅 기록입니다."+Lw+"\n\n총 "+sendchat.length+"개\n\n"+rep)

} else {

replier.reply("[!] 해당 유저의 채팅 기록이 존재하지 않습니다!")

}

}

//채팅 기록 (방)

if (msg.startsWith("!채팅기록")) {

ep = msg.substr(5).trim()

if (ep == "") {

if (!back) {

rep = L+"\n\n"+JSON.parse(FS.read(path))[room].join("\n\n"+L+"\n\n")+"\n\n"+L

} else {

rep = L+"\n\n"+JSON.parse(FS.read(path))[room].reverse().join("\n\n"+L+"\n\n")+"\n\n"+L

}

replier.reply("[!] '"+room+"' 의 채팅 기록입니다."+Lw+"\n\n총 "+(JSON.parse(FS.read(path))[room]).length+"개\n\n"+rep)

} else if (ep == "전체") {

if (!back) {

rep = L+"\n\n"+JSON.parse(FS.read(path))[all].join("\n\n"+L+"\n\n")+"\n\n"+L

} else {

rep = L+"\n\n"+JSON.parse(FS.read(path))[all].reverse().join("\n\n"+L+"\n\n")+"\n\n"+L

}

replier.reply("[!] 종합 채팅 기록입니다."+Lw+"\n\n총 "+(JSON.parse(FS.read(path))[all]).length+"개\n\n"+rep)

} else {

if (JSON.parse(FS.read(path))[ep]) {

if (!back) {

rep = L+"\n\n"+JSON.parse(FS.read(path))[ep].join("\n\n"+L+"\n\n")+"\n\n"+L

} else {

rep = L+"\n\n"+JSON.parse(FS.read(path))[ep].reverse().join("\n\n"+L+"\n\n")+"\n\n"+L

}

replier.reply("[!] '"+ep+"' 의 채팅 기록입니다."+Lw+"\n\n총 "+(JSON.parse(FS.read(path))[ep]).length+"개\n\n"+rep)

} else {

replier.reply("[!] 해당 방의 채팅 기록이 존재하지 않습니다!")

}

}

}

if (msg == "!방목록") {

json = JSON.parse(FS.read(path))

roomlist = Object.keys(json)

roomlist.splice(roomlist.indexOf(all), 1)

roomlist = roomlist.map(a=>"이름 : "+a+"\n총 채팅 수 : "+json[a].length+"회")

replier.reply("[!] 채팅 기록이 저장되어 있는 방 목록입니다."+Lw+"\n\n총 "+roomlist.length+"개\n\n"+roomlist.join("\n\n"))

}

if (admins.indexOf(sender)!=-1) {

if (msg.startsWith("!채팅초기화")) {

ep = msg.substr(6).trim()

if (ep == "") {

json = JSON.parse(FS.read(path))

delete json[room]

FS.write(path, JSON.stringify(json))

replier.reply("[!] '"+room+"' 방의 채팅 기록이 초기화 되었습니다!")

} else if (ep == "전체") {

FS.write(path, "{}")

replier.reply("[!] 모든 채팅 기록이 초기화 되었습니다!")

} else {

json = JSON.parse(FS.read(path))

delete json[ep]

FS.write(path, JSON.stringify(json))

replier.reply("[!] '"+ep+"' 방의 채팅 기록이 초기화 되었습니다!")

}

}

}

} catch(e) {

FS.write(path, "{}")

}

}

