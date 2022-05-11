const https = require("http");

const server = https.createServer((req, res) => {
  res.writeHead(200);

  res.end("hwllo");
});
server.listen(8080);
