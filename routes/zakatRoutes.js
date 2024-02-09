const express = require("express");
const zakatController = require("../controller/zakatController.js");
const router = express.Router();

router.get("/zakat", zakatController.getZakat);
router.get("/zakat/:id", zakatController.getZakatbyId);
router.post("/zakat", zakatController.createZakat);
router.patch("/zakat/:id", zakatController.updateZakatbyId);
router.delete("/zakat/:id", zakatController.deleteZakatbyId);

module.exports = router;
