const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const router = express.Router();

// singup and singin Routes
const singupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.post("/singup", async (req, res) => {
    const body = req.body;
    const obj = singupSchema.safeParse(req.body);
    if (!obj.success) {
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const user = user.Router.findOne({
        username: body.username
    })

    if (user._id) {
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const dbUser = await User.create(body);
    const token = jwt.sing({
        userId: dbUser._id
    }, JWT_SECRET)

    res.json({
        message: "User Created Successfully",
        token: token
    })
})

module.exports = router;