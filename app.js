/* eslint-disable no-console */

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

app.use(cors())
app.use(bodyParser.json())

app.use('/', IndexRouter)
app.use(NotFound)

app.listen(process.env.PORT || 5000)
