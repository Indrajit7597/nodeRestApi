const express = require('express');
const app = express();

app.use((ret, res, next) => {
    res.status(200).json({
        message: 'It wworks'
    });
});

module.exports = app;