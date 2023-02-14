import mongoose, { Document, Schema } from 'mongoose'

export interface ICustomerGroup {
  name: string
}

interface ICustomerGroupModel extends ICustomerGroup, Document {}

const customerGroupSchema: Schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
  },
  { timestamps: true }
)

const customerGroupModel = mongoose.model<ICustomerGroupModel>('customerGroup', customerGroupSchema)

export default customerGroupModel
