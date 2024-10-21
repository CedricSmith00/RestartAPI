const {Router} =require("express");
const userRouter = Router();
const addUser = require("../controllers/addUser");
const hashPassword = require("../../middleware/hashPassword");

userRouter.post("/addUser", addUser);

module.exports = userRouter;