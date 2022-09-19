<<<<<<< Updated upstream
import express from "express"
=======
import express from "express";
import {
  createCity,
  deleteCity,
  getCity,
  getCities,
  updateCity,
} from "../controllers/city.js";
import { verifyAdmin } from "../utils/verifyToken.js";
>>>>>>> Stashed changes

const router = express.Router();
//CREATE
<<<<<<< Updated upstream
router.post("/")
//UPDATE
//DELETE
//GET
=======
router.post("/:hotelid", verifyAdmin, createCity);

//UPDATE
router.put("/:id", verifyAdmin, updateCity);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteCity);
//GET

router.get("/:id", getCity);
>>>>>>> Stashed changes
//GET ALL

router.get("/", getCities);

export default router;