const express = require('express');
const routes = require('./routes');
const app = express();
const port = 8080;

app.use(express.json());
routes(app);

app.listen(port, () => {console.log(`Server opening at ${port}`)});