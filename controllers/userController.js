const User = require("./../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data,
  });
};
exports.createUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data,
  });
};
exports.updateUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data,
  });
};
exports.deleteUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data,
  });
};
