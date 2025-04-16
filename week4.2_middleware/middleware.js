export const checkAge = (req,res,next)=>{

    //accessing query parameter from browser url
    const age= req.query.age;

    if(age<18){
        res.status(403).send("You are not allowed to access this page");        
    }
    next();
}