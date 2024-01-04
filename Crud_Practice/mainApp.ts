import {Application, Request, Response} from "express"
import {client, db} from "./utils/dbConfig"
import {userModel} from "./utils/userModel"

export const mainApp = (app: Application) =>{
    app.post("/create",async (req: Request, res: Response)=>{
        try{
            await client.connect()
            const {name, subject, stack, email} = req.body
            const data = new userModel(name, subject, stack, email)

            await db.insertOne(data)
            return res.status(200).json({
                message: "Created",
                data,
            });
        }catch(error: Error | any){
            return res.status(404).json({
                message: "Error",
                data: error.message
            })
        }

    })
}