//index.js

const fs = require('fs');
const express = require("express");
const app = express();
const sampleData = require("./sampleData.json")
app.use(express.urlencoded({ extended: true }));
const activities = require("./activities.json");

app.get("/", function(req, res){
    console.log("__dirnameの中身", __dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function (req, res) {
    fs.writeFile(__dirname + "/data.txt", req.body.activity, function() {
        res.send("投稿完了");
    });
});

app.post("/delete", function (req, res) {
    activities.splice(req.body.number, 1);
    res.send(activities);
});

app.post("/update", function (req, res) {
    activities[0].activity = req.body.updatedActivity;
    res.send(activities);
});

const port = process.env.PORT || 5000;

app.listen(5000, function(){
    console.log("Listening on localhost port 5000");
});