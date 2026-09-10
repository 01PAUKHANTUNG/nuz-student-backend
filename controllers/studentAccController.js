import studentAccessModel from "../models/studentAcc.js";


const addStudentAccess = async (req, res)=>{
    try {
        
    const {studentID, password} = req.body;
    const studentAcc ={
                        studentID,
                        password
                      }

    const student = new studentAccessModel(studentAcc);
    await student.save();
    res.json({ success: true, message: "Added Student" })

       } catch (error) {     
     }
}

const getStudentAccess = async (req, res)=>{
  try{
        const studentAcc = await studentAccessModel.find();

        res.json({ success: true, student : studentAcc });

    } catch (err) {
        res.status(500).json({ success: false, message: "Error taking Student Access" });
    }
}

const deleteStudent = async (req, res)=>{
   try {
    await studentAccessModel.findByIdAndDelete(req.body._id)
     res.json({ success: true, message: "Student Deleted" })

   } catch (error) {
    res.status(500).json({ success: false, message: "Error Deleting" });
   }
}

export {addStudentAccess, getStudentAccess, deleteStudent};