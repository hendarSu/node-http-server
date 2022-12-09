const express = require("express");
const port = "8000";
const fs = require("fs");
const httpCode = require("http-status-codes");
const app = new express();

app.get("/", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(httpCode.StatusCodes.OK);
    fs.readFile("./html/index.html", null, (err, data) => {
        if (err) {
            res.status(httpCode.StatusCodes.NOT_FOUND);
            res.set("Content-Type", "aplication/json");
            res.send(err)
        } else {
            res.send(data);
        }
    });
})

app.get('/student', (req, res) => {
    const data = {
        name: "Sudirman",
        age: "25"
    };
    res.send(data);
});


app.get("/video", (req, res) => {
    res.set('Content-Type', 'video/mp4');
    res.status(httpCode.StatusCodes.OK);
    fs.readFile("./html/video.mp4", null, (err, data) => {
        if (err) {
            console.log(err);
            res.status(httpCode.StatusCodes.NOT_FOUND)
            res.send(err)
        } else {
            res.send(data);
        }
    });
})

app.listen(port, () => {
    console.log("Server is running port " + port);
});