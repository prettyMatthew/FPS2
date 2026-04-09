const express = require("express");

const app = express();

// 현재 폴더 전체를 웹에서 접근 가능하게
app.use(express.static(__dirname));

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
