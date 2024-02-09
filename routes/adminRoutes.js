import express from "express"
import { getAdmin,createAdmin } from "../controller/adminController.js" 
const routerAdmin = express.Router()

routerAdmin.get("/admin",getAdmin)
routerAdmin.post("/admin",createAdmin)


export default routerAdmin