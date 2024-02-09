const express = require("express");
const adminController = require("../controller/adminController.js");
const routerAdmin = express.Router();

routerAdmin.get("/admin", adminController.getAdmin);
routerAdmin.post("/admin", adminController.createAdmin);

module.exports = routerAdmin;
