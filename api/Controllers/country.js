import Country from "../models/Country.js";
import City from "../models/City.js";

export const createCountry = async (req, res, next) => {
  const newCountry = new Country(req.body);

  try {
    const savedCountry = await newCountry.save();
    res.status(200).json(savedCountry);
  } catch (err) {
    next(err);
  }
};
export const updateCountry = async (req, res, next) => {
  try {
    const updatedCountry = await Country.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCountry);
  } catch (err) {
    next(err);
  }
};
export const deleteCountry = async (req, res, next) => {
  try {
    await Country.findByIdAndDelete(req.params.id);
    res.status(200).json("Country has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getCountry = async (req, res, next) => {
  try {
    const country = await Country.findById(req.params.id);
    res.status(200).json(country);
  } catch (err) {
    next(err);
  }
};
export const getCountrys = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const countrys = await Country.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(countrys);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Country.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};