import { Router } from "express";
const router = new Router()
import postController from "../controller/post-controller.js";

router.post('/post', postController.createPost)
router.get('/post', postController.getPostsByUser)

export default router 