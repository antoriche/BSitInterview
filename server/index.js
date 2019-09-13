import config from '../config';
import express from "express";

let  app = express();

app.get('/ping', (req, res) => res.send("pong"));

app.use(express.static('public'));

app.listen(config.port,  () => console.log(`Example app listening on port ${config.port}!`));