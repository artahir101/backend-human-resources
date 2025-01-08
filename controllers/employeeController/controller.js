const Employee = require("../../models/employeeModels/model");

module.exports = {
  create: async (req, res) => {
    try {
      await new Employee(req.body).save();
      res.status(200).json({
        message: "Employee created successfully"
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error"
      })
    }
  },
  get: async (req, res) => {
    try {
      const data = await Employee.find();
      res.status(200).json({
        message: "Employees fetched successfully",
        data
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error"
      })
    }
  },
  update: async (req, res) => {
    try {
      await Employee.findByIdAndUpdate(req.query.id, req.body);
      res.status(200).json({
        message: "Employee updated successfully",
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error"
      })
    }
  },
  delete: async (req, res) => {
    try {
      await Employee.findByIdAndDelete(req.query.id);
      res.status(200).json({
        message: "Employee deleted successfully",
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error"
      })
    }
  }
};