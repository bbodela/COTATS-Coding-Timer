const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
const port = 4000;
const bodyParser = require("body-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const io = require("socket.io"); // 추가
const socketEvents = require("./socket.js"); // 추가
const serverData = [
	{
		id: 1,
		username: "서버데이터_김코딩",
		email: "dd@dd",
		time: "08:23:00",
		day: "2020.08.13",
	},
	{
		id: 2,
		username: "서버데이터_박코딩",
		email: "ff@ff",
		time: "03:50:08",
		day: "2020.08.14",
	},
];

io.listen(80);
io.sockets.on("connection", function (socket) {
  // 클라이언트로 news 이벤트를 보낸다.
  socket.emit("news", { hello: "world" });

  // 클라이언트에서 my other event가 발생하면 데이터를 받는다.
  socket.on("my other event", function (data) {
    console.log(data);
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cors({
		origin: ["http://localhost:3000"],
		method: ["GET", "POST"],
		credentials: true,
	})
);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
  })
);

app.get("/", (req, res) => {
	console.log("get요청", req);
	res.send("Hello World! test-server");
});

// app.post("/timer", (req, res) => {
//   console.log("req body!!!!!!!!:", req);
//   res.status(200).send("timer post");
// });

app.post("/timer", (req, res) => {
<<<<<<< HEAD
  console.log("req.session check", req.session);
  res.send("response");
=======
	console.log("req.body check", req.body);
	res.send("response");
>>>>>>> 2f8a49471cf14949a0803bf73337ab2d47ad3f9e
});

app.get("/timer", (req, res) => {
	console.log("req.body check", req.body);
	res.send("response");
});

app.post("/user/signin", (req, res) => {
	// console.log("로그인post요청", req.body);
	let findData = serverData.filter((user) => user.email === req.body.email);
	// console.log("email같은유저찾기", findData);
	res.send(findData);
});

app.post("/user/signup", (req, res) => {
	console.log("회원가입post요청", req.body);
	// let findData = serverData.filter((user) => user.email === req.body.email);
	// if (findData) {
	// 	res.status(409).send("Already exists");
	// } else if (!findData) {
	// serverData.push(req.body); // 신규유저 생성
	// console.log(serverData);
	res.send(req.body);
	// } // 가입된 유저에대한 뭔가를보내주고싶은데 자꾸409에러남
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

//------------------------------------------
