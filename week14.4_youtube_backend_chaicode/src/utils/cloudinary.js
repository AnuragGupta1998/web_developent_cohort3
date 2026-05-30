import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'; //file system in nodejs

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (filePath) => {

    try{
        if(!filePath) return null;

        const response = await cloudinary.uploader.upload(
            filePath, {
              resource_type: "auto",
            }
        );

        // console.log("cloudinary response",response.url);

        //after uploading the file on cloudinary we will get the response which contains the url of the uploaded file on cloudinary and other details of the uploaded file and then we will remove the temporary file from local storage "./public" folder using fs.unlinkSync() method which takes the file path as an argument and removes the file from local storage
        fs.unlinkSync(filePath); //remove the temporary file from local storage "./public" folder

        return response; 
    }
    catch(err){

        fs.unlinkSync(filePath); //remove the temporary file from local storage "./public" folder
        // console.log("Error uploading to Cloudinary:", err);

        return null;
    }

}

export {uploadOnCloudinary};