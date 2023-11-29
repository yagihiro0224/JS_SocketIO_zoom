// 여기의 socket은 서버로의 연결을 뜻한다.
const socket = new WebSocket(`ws://${window.location.host}`);

// 서버와 연결 됬을때.
socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

// 서버에서 메세지를 받았을때.
socket.addEventListener("message", (message) => {
  console.log("New message: ", message.data);
});

// 서버와 연결이 끊어졌을때.
socket.addEventListener("close", () => {
  console.log("Disconnected to Server ❌");
});

// 10초 타이머를 설정해서 서버에 메세지를 보낸다.
setTimeout(() => {
  socket.send("hello from the browser!");
}, 10000);
