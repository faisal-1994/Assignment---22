// src/Controllers/postController.js
exports.create = async (req, res) => {
    return res.status(200).json({status:"success", data:"created from postController"})
  };
  
  exports.read = async (req, res) => {
    return res.status(200).json({status:"success", data:"read from postController"})
  };
  
  exports.delete = async (req, res) => {
    return res.status(200).json({status:"success", data:"deleted from postController"})
  };
  
  exports.update = async (req, res) => {
    return res.status(200).json({status:"success", data:"updated from postController"})
  };
  