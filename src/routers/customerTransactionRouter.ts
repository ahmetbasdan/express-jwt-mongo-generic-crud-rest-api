import express from 'express'
import customerTransactionController from '../controllers/customerTransactionController'
import genericRouter from '../generics/genericRouter'
import customerTransactionModel from '../models/customerTransactionModel'

const customerTransactionRouter = express.Router()

customerTransactionRouter.use(genericRouter(customerTransactionModel))
customerTransactionRouter.get('/getTotalBalance/', customerTransactionController.getTotalBalance)

export default customerTransactionRouter
