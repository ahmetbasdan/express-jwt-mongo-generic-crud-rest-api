import { Request, Response } from 'express'
import mongoose from 'mongoose'
import customerTransactionModel from '../models/customerTransactionModel'

const getTotalBalance = (req: Request, res: Response) => {
  const { customerId } = req.body

  if(!customerId){
   return res.status(400).json({ message:"CustomerId not found" })
  }

  customerTransactionModel
    .aggregate([
      { $match: { customer: new mongoose.Types.ObjectId(customerId) } },
      { $group: { _id: '$isDept', amount: { $sum: '$amount' } } },
    ])
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ error }))
}

export default {
  getTotalBalance,
}
