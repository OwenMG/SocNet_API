const express = require('express');
const { appendFile } = require('fs');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.port || 3001
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`SocNetAPI server running on port ${PORT}`)
    });
});