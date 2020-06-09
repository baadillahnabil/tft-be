import path from 'path'
import express from 'express'

import rootDir from '../utils/path'

const router = express.Router()

router.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

export default router
