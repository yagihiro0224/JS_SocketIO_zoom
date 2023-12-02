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
  const input = room.querySelector("input");
  const value = input.value;
  // emit에 인자값은 첫번쨰는 키이고 두번째부터는 아무거나
  // 그리고 마지막에 무언가 실행하고 싶은 함수가 있다면 그 함수를 넣는다.
  socket.emit("new_message", value, roomName, () => {
    addMessage(`You: ${value}`);
  });
  input.value = "";
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
  const form = room.querySelector("form");
  form.addEventListener("submit", handleMessageSubmit);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";
}

// submit: form애서 입력값을 전송할때 쓰는 이벤트.
form.addEventListener("submit", handleRoomSubmit);

// on: 서버로 부터 이벤트를 받은 경우 실행함.
socket.on("welcome", () => {
  addMessage("someone joined!");
});

socket.on("bye", () => {
  addMessage("someone left ㅠㅠ");
});

// 이거와 아래 처리는 같다. 인수가 하나일떈 이렇게 쓸 수도 있나?
// socket.on("new_message", (msg) => {
//   addMessage(msg);
// });
socket.on("new_message", addMessage);
