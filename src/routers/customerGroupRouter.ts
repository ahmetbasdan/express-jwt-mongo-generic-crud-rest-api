import express from 'express'
import genericRouter from '../generics/genericRouter'
import customerGroupModel from '../models/customerGroupModel'

const customerGroupRouter = express.Router()

customerGroupRouter.use(genericRouter(customerGroupModel))

export default customerGroupRouter
