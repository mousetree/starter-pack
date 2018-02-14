import express from 'express'
import {
  getAll
} from './handlers'

const router = express.Router()
router.get('/', getAll)

export default router