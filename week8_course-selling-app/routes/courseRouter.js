import { Router } from "express";
import CourseModel from "../models/course.model.js";
import { userAuthMiddleware } from "../middleware/userMiddleware.js";
import PurchaseModel from "../models/purchase.model.js";

const courseRouter = Router();

courseRouter.get("/allCourses", async (req, res) => {
    try {
        // Fetch all courses from the database
        const courses = await CourseModel.find();
        return res.status(200).json({
            message: "Courses fetched successfully",
            courses: courses
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching courses",
            error: error.message
        });
    }
}
);

courseRouter.post("/buyCourse",userAuthMiddleware,async (req,res) =>{

    const userId = req.userID;
    const {courseId} = req.body;
    try {
        // Check if the course exists
        const course = await CourseModel.findById(courseId);
        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        // Create a purchase record
        await  PurchaseModel.create({
            userId: userId,
            courseId: courseId
        });

        return res.status(200).json({
            message: "Course purchased successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error purchasing course",
            error: error.message
        });
    }

})




export default courseRouter;