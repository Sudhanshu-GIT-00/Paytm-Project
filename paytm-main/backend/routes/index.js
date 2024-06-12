const express = require("express");
const userRouter = require("./user");

const router = expres.Router();

router.use("/user", userRouter);

module.exports = router;
