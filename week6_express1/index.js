import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

app.use(express.json()); //to parse the json body
app.use(express.urlencoded({ extended: true })); //to parse the urlencoded body
app.use(cookieParser()); //to parse the cookies

const users = [];

function generateToke() {
  const token = Math.random().toString(36).substring(2);

  console.log(token);
  return token;
}
generateToke();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Name and email are required");
  }

  // const user = {username, password};
  if (users.find((user) => user.username === username)) {
    return res.status(400).send("User already exists");
  }

  users.push({
    username,
    password,
  });

  console.log(users)

  res.json({
    message: "User signup successfully",
    users,
  });
});

app.post("/login", (req,res)=>{
    const {username, password} = req.body;
    
    if (!username || !password) {
        return res.status(400).send("Name and email are required");
    }
    
    const user = users.find((user) => user.username === username);
    
    if (!user) {
        return res.status(400).send("User not found");
    }
    
    if (user.password !== password) {
        return res.status(400).send("Invalid password");
    }
    user.token = generateToke();

    console.log("login users", users);

    res.cookie("anuragToken", user.token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    res.setHeader("Authorization", user.token);


    res.json({
        message: "User login successfully",
        token: user.token,
    });
})

app.get("/profile",(req,res)=>{

  // const userToken = req.headers["authorization"]
  const userToken = req.cookies.anuragToken;
  
  const user = users.find((user) => user.token === userToken);
  if (!user) {
    return res.status(401).send("Unauthorized");
  }
  
  res.json({
    message: "User profile",
    user: {
      username: user.username,
      password: user.password,
      token: user.token,
    },
  });
})

app.get('/me',(req,res)=>{

  const userToken = req.headers["authorization"];

  const user = users.find((user) => user.token === userToken);

  if (!user) {
    return res.status(401).send("Unauthorized");
  }
  
  res.json({
    message: "User me",
    user: {
      username: user.username,
      password: user.password,
      token: user.token,
    },
  });

})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
