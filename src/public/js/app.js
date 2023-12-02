const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function addMessage(message) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
}

function handleMessageSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#msg input");
  // emit에 인자값은 첫번쨰는 키이고 두번째부터는 아무거나
  // 그리고 마지막에 무언가 실행하고 싶은 함수가 있다면 그 함수를 넣는다.
  socket.emit("new_message", input.value, roomName, () => {
    addMessage(`You: ${value}`);
  });
  input.value = "";
}

function handleNickNameSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#name input");
  socket.emit("nickname", input.value);
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
  const msgForm = room.querySelector("#msg");
  const nameForm = room.querySelector("#name");
  msgForm.addEventListener("submit", handleMessageSubmit);
  nameForm.addEventListener("submit", handleNickNameSubmit);
}

function handleRoomSubmit(event) {
  const roomNameInput = form.querySelector("#roomName");
  const nickNameInput = form.querySelector("#name");
  event.preventDefault();

  socket.emit("enter_room", roomNameInput.value, nickNameInput.value, showRoom);
  roomName = roomNameInput.value;
  input.value = "";
}

// submit: form애서 입력값을 전송할때 쓰는 이벤트.
form.addEventListener("submit", handleRoomSubmit);

// on: 서버로 부터 이벤트를 받은 경우 실행함.
socket.on("welcome", (user) => {
  addMessage(`${user} arrived!`);
});

socket.on("bye", (left) => {
  addMessage(`${left} left ㅠㅠ`);
});

// 이거와 아래 처리는 같다. 인수가 하나일떈 이렇게 쓸 수도 있나?
// socket.on("new_message", (msg) => {
//   addMessage(msg);
// });
socket.on("new_message", addMessage);
