import {model, Schema, Document} from "mongoose";

interface iKid{
    name: string;
    image: string
}

interface iKidData extends iKid, Document {}

const KidModel = new Schema<iKidData>(
    {
        name:{
            type: String,
        },
        image:{
            type: String
        },
    },
    {timestamps: true}
);
export default model<iKidData>("kids", KidModel);