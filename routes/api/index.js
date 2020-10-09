const router = require("express").Router();
// const userRoutes = require("./users");
const facilityRoutes = require("./facilities");
const sendMailRoutes = require("./sendMail.js");

// Facility routes
router.use("/facilities", facilityRoutes);

// User routes
// router.use("/user", userRoutes);

//SendMail routes
router.post("/api/contact-form", sendMailRoutes);

module.exports = router;
