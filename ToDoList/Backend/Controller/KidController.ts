import {Request, Response} from "express"
import KidsModel from "../Model/KidsModel"


export const createKids = async(req:Request, res:Response) =>{
    try {
        const {name, image} = req.body
        const Kids = await KidsModel.create({
            name, 
            image
        })
    } catch (error) {
        return res.status(404).json({
        message: "Error"
        })
    }
}
export const viewKids = async (req: Request, res: Response)=>{
    try {
        const kids = await KidsModel.find()
        return res.status(200).json({
            message: "Kid Viewed",
            data: kids,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error While Reading Data"
        });
    }
}

export const viewSortedKids = async (req: Request, res: Response)=>{
    try {
        const kids = await KidsModel.find().sort({ createdAt: -1})
        return res.status(200).json({
            message: "Read Sorted",
            data: kids,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Error While Reading Data"
        });
    }
}