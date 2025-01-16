import express, { Request, Response } from "express";
import userControllers from "./user.controller";

const router = express.Router();

router.post('/create', userControllers.createUser);
router.post('.login', );

router.get('/', );
router.get('/surveyors',);
router.get('/users',);
router.get('/pro-users',);
router.get('/user/:id', );


const userRouter = router;
export default userRouter;