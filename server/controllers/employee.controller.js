const EmployeeModels = require('../models/employee')
const empController = {}

empController.getEmployees = async(req, res) => {
    const employees = await EmployeeModels.find()
    res.json(employees)
}

empController.createEmployee = async(req, res) => {
    const employee = new EmployeeModels({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    })
    await employee.save()
    res.json({
        "status": "Employee Saved"
    })
}

empController.getEmployee = async(req, res) => {
    const employee = await EmployeeModels.findById(req.params.id)
    res.json(employee)
}

empController.editEmployee = async(req, res) => {
    const { id } = req.params
    const editEmployee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    await EmployeeModels.findByIdAndUpdate(id, { $set: editEmployee }, { new: true })
    res.json({
        "status": "Employee Updated"
    })
}

empController.deleteEmployee = async(req, res) => {
    const { id } = req.params
    await EmployeeModels.findByIdAndRemove(id)
    res.json({
        "message": "Employee Deleted"
    })
}

module.exports = empController