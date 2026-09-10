import mongoose from "mongoose";

const uploadVideoShema = new mongoose.Schema({
     id:{type:String, requried : true},
     course: {type:String, requried : true}, 
     batch : {type: Number, requried : true},
     semester : {type: Number, requried : true},
     module : {type: String, requried : true},
     lesson : {type: Number, requried : true},
     title : {type: String, requried : true},
     videoUrl : {type: String, requried : true}
})

const uploadVideoModel = mongoose.models && mongoose.models.uploadVideos ? mongoose.model('uploadVideos') : mongoose.model("uploadVideos", uploadVideoShema);

export default uploadVideoModel;