import express, { Router } from 'express'
import { Model } from 'mongoose'
import genericController from './genericController'

const genericRouter = (model: Model<any>): Router => {
  const router = express.Router()
  router.get('/', genericController.get(model))
  router.get('/getById/:id', genericController.getById(model))
  router.post('/', genericController.post(model))
  router.put('/:id', genericController.put(model))
  router.delete('/:id', genericController.remove(model))
  router.get('/getCount', genericController.getCount(model))

  return router
}

export default genericRouter
