import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("app is not connected to DB");
      throw err;
    });

    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
    process.exit(1);
  });
