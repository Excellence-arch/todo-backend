const { login } = require("../controllers/users.controller");

const userRouter = require("express").Router();

userRouter.get("/");
userRouter.post("/login", login);

module.exports = userRouter;
