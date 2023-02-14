import express from 'express'
import genericRouter from '../generics/genericRouter'
import customerModel from '../models/customerModel'

const customerRouter = express.Router()

customerRouter.use(genericRouter(customerModel))

export default customerRouter
