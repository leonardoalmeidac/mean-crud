//aqui se definen las rutas de la rest api con sus respectivos metodos
const express = require('express')
const router = express.Router()
const empController = require('../controllers/employee.controller')

router.get('/', empController.getEmployees)
router.post('/', empController.createEmployee)
router.get('/:id', empController.getEmployee)
router.put('/:id', empController.editEmployee)
router.delete('/:id', empController.deleteEmployee)

module.exports = router