const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const bodyParser = require("body-parser");

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

app.use(bodyParser.json());
app.use(
	cors({
		origin: ["http://localhost:3000"],
		method: ["GET", "POST"],
		credentials: true,
	})
);

app.get("/", (req, res) => {
	//
	console.log("get요청", req);
	res.send("Hello World! test-server");
});

app.post("/signin", (req, res) => {
	// console.log("로그인post요청", req.body);
	let findData = serverData.filter((user) => user.email === req.body.email);
	// console.log("email같은유저찾기", findData);
	res.send(findData);
});

app.post("/signup", (req, res) => {
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
