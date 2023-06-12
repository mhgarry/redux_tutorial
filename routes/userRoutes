const express = require("express");
const router = express.Router();

const {
	registerUser,
	loginUser,
	getAllUsers,
	getUser,
	updateUser,
	deleteUser,
} = require("../controllers/userController");

const { authCheck, isAdmin, isUser } = require("../middleware/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);

// router.get("/all", authCheck, isAdmin, getAllUsers);
// router.get("/:id", authCheck, isUser, getUser);
// router.put("/:id", authCheck, isUser, updateUser);
// router.delete("/:id", authCheck, isAdmin, deleteUser);

router.get("/all", getAllUsers, authCheck);
router.get("/:id", getUser, authCheck, isUser);
router.get("/admin", authCheck, isAdmin, getAllUsers);

router.put("/:id", updateUser, authCheck, isUser);
router.delete("/:id", deleteUser, authCheck, isAdmin);

module.exports = router;
