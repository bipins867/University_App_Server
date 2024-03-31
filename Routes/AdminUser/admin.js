const express = require("express");

const adminUserController = require("../../Controller/AdminUser/adminUser");

const router = express.Router();

router.post("/create", adminUserController.createAdminUser);
router.post("/verify", adminUserController.verifyAdminUser);

module.exports = router;
