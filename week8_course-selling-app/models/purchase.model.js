import mongoose,{Schema} from "mongoose";


const purchaseSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    courseId:{
        type:Schema.Types.ObjectId,
        ref:"courses",
        required:true   
    },
});

const PurchaseModel = mongoose.model("purchases",purchaseSchema);
export default PurchaseModel;

