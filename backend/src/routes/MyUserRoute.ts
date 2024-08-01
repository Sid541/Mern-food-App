import express from "express";
import MyUserController from "../controllers/MyUserController";
import jwtCheck from "../middleware/auth";

const router = express.Router();

router.post("/", jwtCheck, jwtParse, MyUserController.createCurrentUser)  
router.put("/",jwtCheck, jwtParse, MyUserController.createCurrentUser);
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser)

export default router;
