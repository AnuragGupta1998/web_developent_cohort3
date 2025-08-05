import {z} from 'zod';
import express from 'express';

const app = express();

const inputValidationSchema = z.object({
    name:z.string().min(1, {error:"Name is required"}),
    age:z.number().int().positive("Age must be a positive integer").optional(),
    email:z.email({error:"invalid email formate"})
})

// const inputValidationSchema = z.number();

// export type InputType = z.infer<typeof inputValidationSchema>; to frontend the type of input
export type InputType = z.infer<typeof inputValidationSchema>;

app.use(express.json());

app.put('/user',(req,res) =>{
    const {success,data} = inputValidationSchema.safeParse(req.body);
    if(!success){
        return res.status(400).json({error: "Invalid input data"});
    }

    const updateUser:InputType = req.body;

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});