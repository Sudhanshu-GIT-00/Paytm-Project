const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index");

app.use(cors());
app.use(express.json());

const app = express();
app.use("api/v1", mainRouter);
app.use("api/v2", v2Router);

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changePassword

// /api/v1/user/transferMoney
// /api/v1/user/balance

