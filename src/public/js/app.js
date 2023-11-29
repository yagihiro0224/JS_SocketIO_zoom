// 여기의 socket은 서버로의 연결을 뜻한다.
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
  console.log("Just got this: ", message.data, " from the server");
});

socket.addEventListener("close", () => {
  console.log("Disconnected to Server ❌");
});
