/* eslint-disable brace-style */
import bcrypt from 'bcrypt'
import CustomerModel from '../models/customer'
import responseFormat from '../utils/response'

export const getAllCustomers = async (req, res) => {
  try {
    const data = await CustomerModel.findAll()
    res
      .status(200)
      .json(
        responseFormat(200, 'Success', 'Get all customers successfully', data)
      )
  } catch (error) {
    res
      .status(200)
      .json(responseFormat(200, 'Error', 'Get all customers failed'))
  }
}

export const createCustomer = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 10)
  const payload = {
    name: req.body.name,
    email: req.body.email,
    password,
    gender: req.body.gender,
    is_married: req.body.is_married,
    address: req.body.address
  }

  try {
    const isDataExist = await CustomerModel.findOne({
      where: { email: req.body.email }
    })

    if (isDataExist === null) {
      const data = await CustomerModel.create(payload)
      res
        .status(200)
        .json(
          responseFormat(200, 'Success', 'Customer created successfully', data)
        )
    } else {
      res
        .status(200)
        .json(responseFormat(200, 'Error', 'Customer already exist'))
    }
  } catch (error) {
    res
      .status(200)
      .json(responseFormat(200, 'Error', 'Create customers failed'))
  }
}
