import {ObjectId} from "mongodb"

export class userModel{
    public _id: ObjectId
    public name: string
    public score: number
    public email: string
    public stack: Array<string>


    constructor(name: string, score: number, email: string, stack: Array<string>){
        this._id = new ObjectId()
        this.name = name
        this.score = score
        this.email = email
        this.stack = stack
    }
}

