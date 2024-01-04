import mongoose from "mongoose"

const URL: string = "mongodb://127.0.0.1:27017/NurseryDB"

export const mainConnection = async ()=>{
try {
    await mongoose.connect(URL).then(()=>{
        console.log("Database is now conected....⭐🚀🚀")
    })
} catch (error) {
    console.log(error)
}
}
