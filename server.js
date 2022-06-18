const express = require('express');

const logger = require('./utils/logger');
const app = express();
const port = 4000;
const host = "localhost";

app.get('/',(req,res) => {
    res.send("Hello World!");
    logger.info("Hello World! from Server");
})


app.listen(port, () => {
    console.log("Server started...");
    logger.info(`Server started and running on http://${host}:${port}`)
})