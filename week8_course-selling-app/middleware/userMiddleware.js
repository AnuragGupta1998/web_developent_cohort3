import jwt from 'jsonwebtoken';

export const userAuthMiddleware = async (req, res, next) => {
    const token = req.headers.authorization? req.headers.authorization : req.cookies.Usertoken;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    try {
        const decodedToken = jwt.verify(token , process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
        const userId = decodedToken.ID;
        req.userID = userId;
        next();
        
    } catch (error) {
        res.status(401).json({
            msg:"Unauthorized",
            error: error.message
        })

        
    }

   
}