import express from 'express';
import { uploadVideo, getAllLessons, deletLesson } from '../controllers/uploadVideoController.js';


const uploadVideoRouter = express.Router();

uploadVideoRouter.post('/upload', uploadVideo);
uploadVideoRouter.get('/getAllLessons', getAllLessons);
uploadVideoRouter.post('/delete', deletLesson)

export default uploadVideoRouter;