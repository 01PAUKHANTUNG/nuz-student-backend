import studentAccessModel from "../models/studentAcc.js";
import jwt from "jsonwebtoken";



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


const studentLogin = async (req, res) => {
  
  try {
    const { studentId, password } = req.body;

    // Find student in MongoDB
    const student = await studentAccessModel.findOne({
      studentID: studentId.trim(),
    });

    if (!student) {
      return res.json({
        success: false,
        message: "Invalid Student ID",
      });
    }

    // Check password
    if (student.password !== password) {
      return res.json({
        success: false,
        message: "Invalid Password",
      });
    }

    if(student.studentID === studentId && student.password === password) {

        const token = jwt.sign({studentID: student.studentID},{ password : student.password},process.env.JWT_SECRET,{expiresIn: "30d"} );

        return res.json({
          success: true,
          token,
          student: {
            studentID: student.studentId,
            password : student.password
          },
          message:"SUCCESS LOGIN"
      }); 
   }

  } catch (error) {
    console.log("Student login error:", error);

    return res.json({
      success: false,
      message: "Server error",
    });
  }
};


export {addStudentAccess, getStudentAccess, deleteStudent, studentLogin};