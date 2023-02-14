import { Request, Response } from 'express'
import configs from '../configs'
import userModel, { IUser } from '../models/userModel'

const signIn = async (req: Request, res: Response) => {
  try {
    const { eMail, password }: IUser = req.body
    const result = await userModel.findOne({ eMail, password })

    if (result) {
      const createToken = configs.jwtConfig.encode({ userId: result._id })
      res.status(200).json({ result: createToken })
    } else {
      res.status(404).json({ message: 'Not Found' })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}

const signUp = async (req: Request, res: Response) => {
  try {
    const { eMail, password }: IUser = req.body
    const result = await userModel.findOne({ eMail })

    if (result) {
      res.status(400).json({ message: 'invalid email' })
    } else {
      const doc = new userModel({ eMail, password })
      const docResult = await doc.save()

      const createToken = configs.jwtConfig.encode({ userId: docResult._id })
      res.status(200).json({ result: createToken })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}

export default {
  signIn,
  signUp,
}
