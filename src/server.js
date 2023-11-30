import http from "http";
// import WebSocket from "ws";
import SocketIO from "socket.io";
import experss, { application } from "express";
import { Socket } from "dgram";
// commit test
const app = experss();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", experss.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));
const handleListen = () => console.log("Listening on http://localhost:3000");

// 같은 서버에서 http server, ws server 둘다 돌리기 위한 코드.
// http가 필요없을 경우엔 ws만 코딩하면 됨.
// 두 놈이 같은 포트(3000)에 있게 하고 싶어서 이렇게 만듦.
const httpServer = http.createServer(app);
// const wss = new WebSocket.Server({ server });
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
  console.log(socket);
});
// const sockets = [];

// on 메소드는 이벤트가 발생하길 기다림. 발생하면 해당 함수를 실행함.
// socket은 너와 브라우저와의 연결이다. 누가 연결됬는지 정보가 들어있슴.
// wss.on("connection", (socket) => {
//   sockets.push(socket);
//   socket["nickname"] = "Anon";
//   console.log("Connected to Browser ✅");
//   socket.on("close", () => console.log("Disconnected from the Browser ❌"));

// 브라우저에서 온 메세지를 받았을때.
// [payload]ペイロードとは、IT用語としては、パケット通信において
// パケットに含まれるヘッダやトレーラなどの付加的情報を除いた、データ本体のことである。
//   socket.on("message", (msg) => {
//     const message = JSON.parse(msg);
//     switch (message.type) {
//       case "new_message":
//         // forEach: sockets에 있는 값들을 하나하나 aSocket로 빼서 처리하라는 의미임.
//         sockets.forEach((aSocket) =>
//           aSocket.send(`${socket.nickname}: ${message.payload}`)
//         );
//         break;
//       case "nickname":
//         socket["nickname"] = message.payload;
//         break;
//     }
//   });
// });

httpServer.listen(3000, handleListen);
