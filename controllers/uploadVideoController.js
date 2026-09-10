
import uploadVideoModel from "../models/uploadVDModels.js";

const uploadVideo = async (req, res)=>{

    const {course, batch, semester, module, lesson, title, videoUrl} = req.body;
   

    const videoData ={
        course,
        batch,
        semester,
        module,
        lesson,
        title,
        videoUrl
    }

    const video = new uploadVideoModel(videoData);
    await video.save();

    res.json({ success: true, message: "Video Uploaded Successfully" })
}

const getAllLessons = async (req, res) =>{
    try{
        const lessons = await uploadVideoModel.find();

        res.json({ success: true, lesson : lessons });

    } catch (err) {
        res.status(500).json({ success: false, message: "Error fetching lessons" });
    }
}

const deletLesson = async (req, res)=>{
   try {
    await uploadVideoModel.findByIdAndDelete(req.body._id)
     res.json({ success: true, message: "Video Deleted" })

   } catch (error) {
    res.status(500).json({ success: false, message: "Error Deleting" });
   }
}


export { uploadVideo, getAllLessons, deletLesson };
