const express = require("express");
const router = express.Router();
const employeeController = require("../../controllers/employeeController/controller.js");

router.get("/get", employeeController.get);
router.get("/create", employeeController.create);
router.get("/update", employeeController.update);
router.get("/delete", employeeController.delete);

module.exports = router;