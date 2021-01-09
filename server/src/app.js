const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require("./models");
const config = require('./config');
const router = require("./routes");

const port = process.env.PORT || 8081;
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

sequelize.sync().then(() => app.listen(config.port, () => console.log(`Server listening on port ${port}`)));
