const express = require("express");
const router = express.Router();
const employeeController = require("../../controllers/employeeController/controller.js");

router.get("/get", employeeController.get);
router.post("/create", employeeController.create);
router.post("/update", employeeController.update);
router.delete("/delete", employeeController.delete);

module.exports = router;