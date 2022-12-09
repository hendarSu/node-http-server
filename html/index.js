// This core module nodejs
const http = require("http");
const fs = require("fs");

function onRequest(req, res) {
    // Function for create headers attribute on http request.
    res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });
    fs.readFile("./html/index.html", null, (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(404);
            res.write("File Not Found");
        } else {
            res.write(data);
        }

        res.end();
    });
}

http.createServer(onRequest).listen(8100);

