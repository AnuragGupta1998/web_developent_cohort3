# Youtube Backend in JavaScript

this is backend from hitesh sir, chai code
- [Model link ](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

config detenv file with package.json file
- "scripts":{
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
}

# index.js
- import dotenv from "dotenv"
- dotenv.config({
    path:"./.env"
})


# app.js
- app.use(cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true
}));

- app.use(express.json({limit: "100kb"}));      // to parse JSON request bodies with a size limit of 100kb
- app.use(express.urlencoded({ limit :" 100kb", extended: true}));// to parse URL-encoded or params request 
- app.use(express.static("public"));      // to serve static files from the "public" directory
- app.use(cookieParser()); //access cookies from browser in backend