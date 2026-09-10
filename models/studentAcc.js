import mongoose from "mongoose";

const studentAccessShema = new mongoose.Schema({
     studentID:{type:String, requried : true},
     password: {type:String, requried : true}
})

const studentAccessModel = mongoose.models && mongoose.models.studentAccess ? mongoose.model('studendAccess') : mongoose.model("StudentAccess", studentAccessShema);

export default studentAccessModel;