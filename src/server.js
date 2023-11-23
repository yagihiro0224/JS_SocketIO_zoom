// 페이지 새로 고침 자동화.
import livereloadMiddleware from "connect-livereload";
import livereload from "livereload";
import experss, { application } from "express";

// 페이지 새로 고침 자동화.
const liveServer = livereload.createServer({
  exts: ["js", "pug", "css"],
  delay: 1000,
});
liveServer.watch(__dirname);
app.use(livereloadMiddleware());

const app = experss();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", experss.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);
