const Hobby = require("../models/hobby");

module.exports = {
  getHobbies: async (req, res) => {
    try {
      const hobbies = await Hobby.find();
      res.json(hobbies);
    } catch (err) {
      console.log(err);
    }
  },
  getHobbyById: async (req, res) => {
    try {
      const hobby = await Hobby.findById(req.params.id);
      res.json(hobby);
    } catch (err) {
      console.log(err);
    }
  },
  createHobby: async (req, res) => {
    try {
      const { name } = req.body;
      const hobby = new Hobby({ name });
      await hobby.save();
      res.json("Created successfully!");
    } catch (err) {
      console.log(err);
    }
  },
  deleteAll: async (req, res) => {
    try {
      await Hobby.deleteMany();
      res.json("Deleted successfully!");
    } catch (err) {
      console.log(err);
    }
  },
};
