import express from 'express'
import userController from '../controllers/userController'

const router = express.Router()

router.post('/signIn', userController.signIn)
router.post('/signUp', userController.signUp)

export default router
