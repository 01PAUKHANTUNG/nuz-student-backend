import express from 'express';
import { addStudentAccess, deleteStudent, getStudentAccess } from '../controllers/studentAccController.js';



const studentAccRouter = express.Router();

studentAccRouter.post('/add', addStudentAccess);
studentAccRouter.get('/get/', getStudentAccess);
studentAccRouter.post('/delete', deleteStudent);


export default studentAccRouter;