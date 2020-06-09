import express from 'express'

import { getAllCustomers, createCustomer } from '../controllers/customer'

const router = express.Router()

router.get('', (req, res) => {
  res.status(200).send('<h2 style="text-align: center;">TheFThing API!</h2>')
})

router.get('/customers', getAllCustomers)
router.post('/customers', createCustomer)

export default router
