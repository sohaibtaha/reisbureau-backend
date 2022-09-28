import express from "express";
import {
  createCity,
  deleteCity,
  getCity,
  getCities,
  updateCity,
} from "../controllers/city.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:hotelid", verifyAdmin, createCity);

//UPDATE
router.put("/:id", verifyAdmin, updateCity);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteCity);
//GET

router.get("/:id", getCity);
//GET ALL

router.get("/", getCities);

export default router;