import express from 'express'

import {
  getAllCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from '../controllers/customer'

const router = express.Router()

router.get('', (req, res) => {
  res.status(200).send('<h2 style="text-align: center;">TheFThing API!</h2>')
})

// Customers Endpoints
router.get('/customers', getAllCustomers)
router.post('/customers', createCustomer)
router.put('/customers/:id', updateCustomer)
router.delete('/customers/:id', deleteCustomer)

export default router
