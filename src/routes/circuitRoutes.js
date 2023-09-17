const { Router } = require('express')
const {
  create, 
  getAll,
  getById,
  remove,
  update
} = require('../controllers/CircuitController')

const routes = Router()

routes.get('/', getAll)
routes.get('/:id', getById)
routes.post('/', create)
routes.put('/:id', update)
routes.delete('/:id', remove)