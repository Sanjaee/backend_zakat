import express from "express"
import { getZakat,getZakatbyId,createZakat,updateZakatbyId,deleteZakatbyId } from "../controller/zakatController.js"
const router = express.Router()


router.get("/zakat",getZakat)
router.get("/zakat/:id",getZakatbyId)
router.post("/zakat",createZakat)
router.patch("/zakat/:id",updateZakatbyId)
router.delete("/zakat/:id",deleteZakatbyId)

export default router;