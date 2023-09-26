// src/Controllers/userController.js
exports.create = async (req, res) => {
    return res.status(200).json({status:"success", data:"created from userController"})
  };
  
  exports.read = async (req, res) => {
    return res.status(200).json({status:"success", data:"read from userController"})
  };
  
  exports.delete = async (req, res) => {
    return res.status(200).json({status:"success", data:"deleted from userController"})
  };
  
  exports.update = async (req, res) => {
    return res.status(200).json({status:"success", data:"updated from userController"})
  };
  