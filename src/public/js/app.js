// 이렇게 하면 socketIO를 front-end와 연결할 수 있슴.
const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function backendDone(msg) {
  console.log(`the back-end says: `, msg);
}

function handleRoomSubmit(event) {
  // フォームのデフォルトの動作をキャンセルし、ページがリロードされないようにします。
  // つまり、フォームが送信されたときにページが再読み込みされるのを防ぎます。
  event.preventDefault();
  const input = form.querySelector("input");
  // emit: ws의 send와 같음.
  // 하지만 우리가 지정할 수 있는 특정한 이름의 이벤트(enter_room)와 object(payload)를 보낼수 있슴.
  // argument는 얼마든지 무엇이든 넣을수 있슴. 따봉~.
  // 하지만 back-end에서 끝났다는 사실을 알리기 위해 function을 넣고 싶으면
  // 그 function이 가장 마지막 argument가 되어야 해.
  // 마지막 argument에는 서버에서 호출하는 function이 들어간다.
  socket.emit("enter_room", input.value, backendDone);
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
