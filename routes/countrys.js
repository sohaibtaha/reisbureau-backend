import express from "express"
import Country from "../models/Country.js";

const router = express.Router();

//CREATE
router.post("/", async(req, res)=>{
    const newCountry = new Country(req.body)
    
    
    
    try {
        const savedCountry = await newCountry.save()
        res.status(200).json(savedCountry)
    } catch (error) {
        res.status(500).json(error)
    }
})
//UPDATE
router.put("/:id", async(req, res)=>{
    try {
        const updatedCountry = await Country.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedCountry)
    } catch (error) {
        res.status(500).json(error)
    }
})
//DELETE
router.delete("/:id", async(req, res)=>{
    try {
        await Country.findByIdAndDelete(req.params.id)
        res.status(200).json("Country has been deleted from DB")

    } catch (error) {
        res.status(500).json(error)
    }
})
//GET
router.get("/:id", async(req, res)=>{
    try {
        const country = await Country.findById(req.params.id)
        res.status(200).json(country)
    } catch (error) {
        res.status(500).json(error)
    }
})
//GET ALL
router.get("/", async(req, res)=>{
    try {
        const countrys = await Country.find(req.params.id)
        res.status(200).json(countrys)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router