import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json()); //to parse the json body

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
    token: generateToke(),
  });

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

    
    res.json({
        message: "User login successfully",
        token: user.token,
    });
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
