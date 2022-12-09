const http = require("http");

function onRequest(req, res) {
    res.writeHead(200, { "Content-type" : "application/json" });
    const data = {
        name: "Sudirman",
        age: "25"
    }
    res.end(JSON.stringify(data));
}

http.createServer(onRequest).listen(8100);

