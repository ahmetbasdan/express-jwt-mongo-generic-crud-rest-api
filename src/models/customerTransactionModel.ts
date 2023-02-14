import mongoose, { Document, Schema } from 'mongoose'

export interface ICustomerTransaction {
  customer: string
  docNo: string
  description: string
  transactionDate: Date
  amount: number
  isDept: boolean
}

interface ICustomerTransactionModel extends ICustomerTransaction, Document {}

const customerTransactionSchema: Schema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref:"customer"
    },
    docNo: {
      type: Schema.Types.String,
    },
    description: {
      type: Schema.Types.String,
    },
    transactionDate: {
      type: Schema.Types.Date,
    },
    amount: {
      type: Schema.Types.Number,
      required: true,
      default: 0,
    },
    isDept: {
      type: Schema.Types.Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

const customerTransactionModel = mongoose.model<ICustomerTransactionModel>('customerTransaction', customerTransactionSchema)

export default customerTransactionModel
