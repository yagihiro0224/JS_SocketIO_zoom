import http from "http";
import WebSocket from "ws";
import experss, { application } from "express";
// commit test
const app = experss();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", experss.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

// http server, ws server 둘다 돌리기 위한 코드. http가 필요없을 경우엔 ws만 코딩하면 됨.
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

server.listen(3000, handleListen);
