const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
const port = 4000;
const bodyParser = require("body-parser");
const SocketIo = require("socket.io"); // 추가
const socketEvents = require("./socket.js"); // 추가

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  console.log("get요청", req);
  res.send("Hello World! test-server");
});

app.post("/signin", (req, res) => {
  console.log("post요청", req);
  res.send("Hello World! test-server>>>>");
});

// app.post("/timer", (req, res) => {
//   console.log("req body!!!!!!!!:", req);
//   res.status(200).send("timer post");
// });

app.post("/timer", (req, res) => {
  console.log("req.body check", req.body);
  res.send("response");
});
app.get("/timer", (req, res) => {
  console.log("req.body check", req.body);
  res.send("response");
});

// app.get("/signin", (req, res) => {});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
const io = SocketIo(server); // socket.io와 서버 연결하는 부분
socketEvents(io); // 아까 만든 이벤트 연결
