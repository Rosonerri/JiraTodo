import { Router } from "express";
import {createKids, viewKids, viewSortedKids} from "../Controller/KidController"


const router: Router = Router()

router.route("/create-kid").post(createKids)
router.route("/read-kid").get(viewKids)