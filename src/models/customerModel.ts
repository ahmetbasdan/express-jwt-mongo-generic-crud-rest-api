import mongoose, { Document, Schema } from 'mongoose'

export interface ICustomer {
  customerGroup: string
  name: string
  surName: string
  code: string
  address: string
}

export interface ICustomerModel extends ICustomer, Document {}

const customerSchema: Schema = new Schema(
  {
    customerGroup: {
      type: Schema.Types.ObjectId,
      required: true,
      ref:"customerGroup"
    },
    name: {
      type: Schema.Types.String,
    },
    surName: {
      type: Schema.Types.String,
    },
    code: {
      type: Schema.Types.String,
    },
    address: {
      type: Schema.Types.String,
    },
  },
  { timestamps: true }
)

const customerModel = mongoose.model<ICustomerModel>('customer', customerSchema)

export default customerModel
