// src/Controllers/adminController.js
exports.create = async (req, res) => {
    return res.status(200).json({status:"success", data:"created from admin-Controller"})
  };
  
  exports.read = async (req, res) => {
    return res.status(200).json({status:"success", data:"read from admin-Controller"})
  };
  
  exports.delete = async (req, res) => {
    return res.status(200).json({status:"success", data:"deleted from admin-Controller"})
  };
  
  exports.update = async (req, res) => {
    return res.status(200).json({status:"success", data:"updated from admin-Controller"})
  };
  