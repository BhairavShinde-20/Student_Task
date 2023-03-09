const express = require("express");
const router = express.Router();

//for creating data use post metod
router.post("/",require("./../controllers/student").createStudent);

// for gating data used get of all user
router.get("/",require("./../controllers/student").getAllStudent);

// for  a gatting  spacific user data we use /:userID   
router.get("/:userID",require("./../controllers/student").getStudent);

//for delete data we use delete data with help of userID 
router.delete("/:userID",require("./../controllers/student").deleteStudent);

// for updating data we use put method with help of userID
router.put("/:userID",require("./../controllers/student").updateStudent);

// export module.exports = router;
module.exports= router;