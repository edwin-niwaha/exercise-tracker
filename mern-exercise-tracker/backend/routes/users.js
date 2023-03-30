import { Router } from "express";
import User from "../models/user.model.js";
const router = Router();

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err.message));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const emailId = req.body.emailId;
  const newUser = new User({ username: username, emailId: emailId });

  newUser
    .save()
    .then(() => res.json("User added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// fetch route
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete route
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// update route
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.username = req.body.username;
      user.emailId = req.body.emailId;

      user
        .save()
        .then(() => res.json("User updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
