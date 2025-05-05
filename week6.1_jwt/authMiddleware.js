import jwt from "jsonwebtoken";
const SECRET = "ANURAG";

export const auth = (req, res, next) => {
  const token = req.cookies.anuragToken;
  console.log("token", token);
  // const token = req.headers["authorization"];

  if (!token) {
    return res.json({
      msg: "Unauthorized",
    });
  }

    //  jwt.verify(token,SECRET,(err,decoded)=>{
    //       if(err){
    //           return res.status(403).json({
    //               msg:"Invalid token"
    //           })
    //       }
    //       console.log("decoded",decoded);
    //       req.user=decoded;  //put decoded values to user
    //       next();
    //   })

  try {
    const verifiedUser = jwt.verify(token, SECRET);
    console.log("verifiedUser", verifiedUser);
    if (!verifiedUser) {
      return res.status(403).json({
        msg: "Invalid token",
      });
    }
    req.user = verifiedUser; //put decoded values to user
    next();
  } catch (error) {
    return res.status(403).json({
      msg: "invalid token",
    });
  }
};
