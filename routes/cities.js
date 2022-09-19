import express from "express"
import City from "../models/City.js";

const router = express.Router();

//CREATE
router.post("/", async(req, res)=>{
    const newCity = new City(req.body)
    
    
    
    try {
        const savedCity = await newCity.save()
        res.status(200).json(savedCity)
    } catch (error) {
        res.status(500).json(error)
    }
})
//UPDATE
router.put("/:id", async(req, res)=>{
    try {
        const updatedCity = await City.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedCity)
    } catch (error) {
        res.status(500).json(error)
    }
})
//DELETE
router.delete("/:id", async(req, res)=>{
    try {
        await City.findByIdAndDelete(req.params.id)
        res.status(200).json("City has been deleted from DB")

    } catch (error) {
        res.status(500).json(error)
    }
})
//GET
router.get("/:id", async(req, res)=>{
    try {
        const city = await City.findById(req.params.id)
        res.status(200).json(city)
    } catch (error) {
        res.status(500).json(error)
    }
})
//GET ALL
router.get("/", async(req, res)=>{
    try {
        const citys = await City.find(req.params.id)
        res.status(200).json(citys)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router