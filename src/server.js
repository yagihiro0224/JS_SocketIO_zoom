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

function publicRoooms() {
  // const sids = wsServer.sockets.adapter.sids;
  // const rooms = wsServer.sockets.adapter.rooms;
  // sids: private한 방의 id
  // rooms: private한 방의 id 와 public한 방의 id 둘 다 있다.
  // room ID(app)를 socket ID(server)에서 찾을수 있다면 우리가 Private용 room을 찾은거다.
  const {
    sockets: {
      adapter: { sids, rooms },
    },
  } = wsServer;

  const publicRooms = [];
  // rooms에서 key를 하나하나 들고와서
  rooms.forEach((_, key) => {
    // private한 벙의 키가 없는 값을 publicRoom에 저장함.
    if (sids.get(key) === undefined) {
      publicRooms.push(key);
    }
  });
  // 고로 publickRooms는 public한 방의 키값을 제공함.
  return publicRooms;
}

wsServer.on("connection", (socket) => {
  socket["nickname"] = "Anon";
  // onAny: Socket안에 어떠한 이벤트도 감시할 수 있는 기능.
  socket.onAny((event) => {
    // console.log(wsServer.sockets.adapter);
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
    wsServer.sockets.emit("room_change", publicRoooms());
  });
  socket.on("disconnecting", () => {
    // 각 room들에다가 bye이벤트를 전송한다.
    socket.rooms.forEach((room) =>
      socket.to(room).emit("bye", socket.nickname)
    );
  });
  socket.on("disconnect", () => {
    wsServer.sockets.emit("room_change", publicRoooms());
  });
  socket.on("new_message", (msg, room, done) => {
    socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
    done();
  });
  // nickname 이벤트가 발생하면 nickname을 가져와서 socket의 nickname에 저장함.
  socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
});

httpServer.listen(3000, handleListen);
// Adapter가 하는 일은 다른 서버들 사이에 실시간 어플리케이션을 동기화 하는것.
