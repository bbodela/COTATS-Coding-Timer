const express = require("express");
const app = express();
var cors = require("cors");
const port = 4000;

app.use(
	cors({
		origin: ["http://localhost:3000"],
		method: ["GET", "POST"],
		credentials: true,
	})
);

app.get("/", (req, res) => {
	console.log("get요청", req);
	res.send("Hello World! test-server");
});

app.post("/signin", (req, res) => {
	console.log("post요청", req);
	res.send("Hello World! test-server>>>>");
});

// app.get("/signin", (req, res) => {});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
