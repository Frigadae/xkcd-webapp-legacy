const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const fs = require("fs");
const url = require("url")

const portNum = 5000;
const app = express();

//const endpointStart = "https://xkcd.com/";
//const endpointEnd = "info.0.json";

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

app.get('/getData', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const suppliedUrl = req.query.url;

    if (suppliedUrl == null || suppliedUrl == "") {
        const jsonResponse = {
            "name":"getData",
            "about":"getData sends a fetch request to the url of an API given and receives a JSON back.",
            "param":"A url link",
            "returns":"A JSON object",
            "notes":"You are receiving this JSON because no url is given in the query. Please give a url link.",
            "example":"http://localhost:3000/getData?url=https://xkcd.com/info.0.json",
        };
        res.json(jsonResponse);
    } else {
        const response = await fetch(suppliedUrl).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong fetching JSON');
            }
        });
        res.json(response);
    }
});

app.get("", cors(corsOptions), async (req, res) => {
    fs.readFile("localhostPage.html", (error, data) => {
        res.writeHead(200, {'Content-Type': "text/html"});
        res.write(data);
        res.end();
    });
});

app.listen(portNum, () => {
    console.log(`Server script listening at http://localhost:${portNum}`);
});
