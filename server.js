const path = require("path");

const express = require("express");

const app = express(); 

app.use(express.static('./dist/girlsfab'));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/dist/girlsfab/index.html'));
});

app.listen(process.env.PORT || 9080);