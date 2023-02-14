import express from 'express'
import jwtMiddleware from '../middlewares/jwtMiddleware'
import customerGroupRouter from './customerGroupRouter'
import customerRouter from './customerRouter'
import customerTransactionRouter from './customerTransactionRouter'
import userRouter from './userRouter'

const routers = express.Router()

routers.use('/user', userRouter)
routers.use(jwtMiddleware)
routers.use('/customer', customerRouter)
routers.use('/customerGroup', customerGroupRouter)
routers.use('/customerTransaction', customerTransactionRouter)

export default routers
