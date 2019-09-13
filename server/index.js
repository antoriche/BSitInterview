import config from '../config';
import express from "express";

const app = express();
const apiRouter = express.Router();

app.use("/api", apiRouter);

apiRouter.use('/champions', require('./routes/champions.router'));

app.use(express.static('public'));

app.listen(config.port,  () => console.log(`Example app listening on port ${config.port}!`));