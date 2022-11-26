const User = require("../models/user");
const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const maxSize = 1 * 1000 * 1000;

var upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb) {
    // Set the filetypes, it is optional
    var filetypes = /jpeg|jpg|png/;
    var mimetype = filetypes.test(file.mimetype);

    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(
      "Error: File upload only supports the " +
        "following filetypes - " +
        filetypes
    );
  },

  // mypic is the name of file attribute
}).single("image");

module.exports = {
  signup: async (req, res) => {
    try {
      const newUser = User({ ...req.body });
      await newUser.save();
      res.json(newUser);
    } catch (err) {
      console.log(err);
    }
  },
  signin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = User.find({ email });
      if (user) {
        res.json({ error: "This email has already existed!" });
      }
      return res.json(user);
    } catch (err) {
      console.log(err);
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      console.log(err);
    }
  },
  deleteUserById: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  },
  deleteAll: async (req, res) => {
    try {
      await User.deleteMany({});
      res.json("Delete all");
    } catch (err) {
      console.log(err);
    }
  },
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: { ...req.body },
        },
        { new: true }
      );
      res.json(updatedUser);
    } catch (err) {
      console.log(err);
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate("hobbies");
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  },
  uploadImage: function (req, res, next) {
    upload(req, res, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Success, Image uploaded!");
      }
    });
  },
};
