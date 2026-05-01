//high order function which will take a request handler function as an argument and return a new function which will handle the async errors
const asyncHandler = (requestHandlerFn) => {
    return (req,res,next) => {
        Promise.resolve(requestHandlerFn(req,res,next))
        .catch((err) =>next(err));
    }
}

export {asyncHandler};

/*
//we can alse try catch approach to handle async functions
const asyncFn = (fn)=>{
    return async (req,res,next) =>{
        try{
            await fn(req,res,next);
        }
        catch(err){
            res.status(err.code || 500).json({
                success: false,
                message: "Internal Server Error",
                error: err.message
            });
        } 
    }
}

export {asyncFn};
*/