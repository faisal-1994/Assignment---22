// src/Controllers/customerController.js
exports.create = async (req, res) => {
    return res.status(200).json({status:"success", data:"created from customerController"})
  };
  
  exports.read = async (req, res) => {
    return res.status(200).json({status:"success", data:"read from customerController"})
  };
  
  exports.delete = async (req, res) => {
    return res.status(200).json({status:"success", data:"deleted from customerController"})
  };
  
  exports.update = async (req, res) => {
    return res.status(200).json({status:"success", data:"updated from customerController"})
  };
  