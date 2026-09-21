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
console.log(studentId);

    if (!studentId || !password) {
      return res.status(400).json({
        success: false,
        message: "Student ID and password are required",
      });
    }

    // Find student in MongoDB
    const student = await studentAccessModel.findOne({
      studentID: studentId.trim(),
    });

    if (!student) {
      return res.status(401).json({
        success: false,
        message: "Invalid Student ID or Password",
      });
    }

    // Check password
    if (student.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid Student ID or Password",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        studentID: student.studentID,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    return res.status(200).json({
      success: true,
      token,
      student: {
        studentID: student.studentId,
        name: student.name,
        email: student.email,
      },
    });

  } catch (error) {
    console.log("Student login error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export { studentLogin};

export {addStudentAccess, getStudentAccess, deleteStudent, studentLogin};