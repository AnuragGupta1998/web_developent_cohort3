import express from "express"

const app = express();

const PORT = 3000;

//simple routes
app.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>");
});

//reading from query parameters
app.get("/sum",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const result1 = parseInt(a) + parseInt(b);
    res.send(`The sum of ${a} and ${b} is ${parseInt(result1)}`);
});

//reding the query parameters
function multiplyFn(req,res){
    const {a,b} = req.query;
    const result = parseInt(a) * parseInt(b);
    res.send(`The Multiplication of ${a} and ${b} is ${result}`);
}

// reading the query parameters
app.get("/multiply",multiplyFn);

// reading the parameters from the URL
app.get("/params/:a/:b",(req,res)=>{
    const a = req.params.a;
    const b = req.params.b;
    console.log( typeof(a))  //string type of params
    res.send(`The parameters are ${a} and ${b} `);
});

//server listining to the port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);