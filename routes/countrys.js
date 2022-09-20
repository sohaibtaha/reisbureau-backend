import express from "express";
import {
  countByCity,
  createCountry,
  deleteCountry,
  getCountry,
  getCountrys,
  updateCountry,
} from "../Controllers/country.js";
import Country from "../models/Country.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCountry);

//UPDATE
router.put("/:id", verifyAdmin, updateCountry);
//DELETE
router.delete("/:id", verifyAdmin, deleteCountry);
//GET

router.get("/find/:id", getCountry);
//GET ALL

router.get("/", getCountrys);
router.get("/countByCity", countByCity);

export default router;