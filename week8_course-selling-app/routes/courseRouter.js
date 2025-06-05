import { Router } from "express";
import CourseModel from "../models/course.model.js";

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




export default courseRouter;