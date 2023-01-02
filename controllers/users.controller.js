const UserModel = require("../models/users.model");

const login = (req, res) => {
  const loginDets = { email: req.body.email, password: req.body.password };
  UserModel.findOne({ email: loginDets.email }, (err, resp) => {
    if (err)
      res.status(501).send({ status: false, message: "Internal Server Error" });
    else {
      if (resp) console.log("Hi");
      else res.send({ status: false, message: "Email not registered" });
    }
  });
};

module.exports = { login };
