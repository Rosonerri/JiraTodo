// console.clear()
import express, {Application} from "express";
import { mainApp } from "./mainApp";
import "./utils/dbConfig"
import cors from "cors";



const app: Application = express();
app.use(cors())
app.use(express.json());
const Port: number = 2288;

mainApp(app);

const server = app.listen(Port, () => {
    console.log();
    console.log("Ready to run on Port", Port)
})

process.on("uncaughtException", (error: Error | any)=>{
console.log("uncaughtException:", error)

process.exit(1);
})
process.on("unhandledRejection", (reason: any)=>{
    console.log("unhandledrejection:", reason);

    server.close(()=>{
        process.exit(1);
    });
});


