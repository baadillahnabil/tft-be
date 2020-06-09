/* eslint-disable no-console */
// import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import db from './config/db'

import IndexRouter from './routes'
import NotFound from './routes/404'

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log(`Error: ${err}`))

const app = express()
// config()

app.use(cors())
app.use(bodyParser.json())

app.use('/', IndexRouter)
app.use(NotFound)

app.listen(process.env.PORT || 5000)

// db.sync()
//   .then(() => {
//     config()
//     app.listen(process.env.PORT || 3000)
//   })
//   .catch(error => {
//     console.error(error)
//   })
