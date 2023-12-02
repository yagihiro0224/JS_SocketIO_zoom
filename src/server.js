import http from "http";

import SocketIO from "socket.io";
import experss, { application } from "express";
import { Socket } from "dgram";

const app = experss();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", experss.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));
const handleListen = () => console.log("Listening on http://localhost:3000");

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
  socket["nickname"] = "Anon";
  // onAny: Socket안에 어떠한 이벤트도 감시할 수 있는 기능.
  socket.onAny((event) => {
    console.log(`Socket event: ${event}`);
  });
  socket.on("enter_room", (roomname, nickname, done) => {
    socket["nickname"] = nickname;
    // join: SocketIO가 room을 제공해주는것.
    socket.join(roomname);
    done();
    // 입장시 방안에다가 웰컴이라고 메세지 날려줌.
    // to: 방 전체에다가 실행할 수 있는 기능.
    socket.to(roomname).emit("welcome", socket.nickname);
  });
  socket.on("disconnecting", () => {
    // 각 room들에다가 bye이벤트를 전송한다.
    socket.rooms.forEach((room) =>
      socket.to(room).emit("bye", socket.nickname)
    );
  });
  socket.on("new_message", (msg, room, done) => {
    socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
    done();
  });
  // nickname 이벤트가 발생하면 nickname을 가져와서 socket의 nickname에 저장함.
  socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
});

httpServer.listen(3000, handleListen);
