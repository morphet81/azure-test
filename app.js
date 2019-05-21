const express = require("express");
const app = express();
const basicAuth = require("express-basic-auth");

app.use([
    basicAuth({
        challenge: true,
        users: { palo_ocbc: "ocbc_palo" },
    }),
    express.static("./src/"),
]);

app.listen(process.env.PORT || 3000, function() {
    console.log("Example app listening on port 3000!");
});




// const http = require('http');

// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {

//     res.statusCode = 200;

//     res.setHeader('Content-Type', 'text/html');

//     res.end('<h1>Hello World</h1>');

// });

// server.listen(port, () => {

//     console.log(`Server running at port ` + port);

// });