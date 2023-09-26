// src/Controllers/subAdminController.js
exports.create = async (req, res) => {
    return res.status(200).json({status:"success", data:"created from subAdminController"})
  };
  
  exports.read = async (req, res) => {
    return res.status(200).json({status:"success", data:"read from subAdminController"})
  };
  
  exports.delete = async (req, res) => {
    return res.status(200).json({status:"success", data:"deleted from subAdminController"})
  };
  
  exports.update = async (req, res) => {
    return res.status(200).json({status:"success", data:"updated from subAdminController"})
  };
  