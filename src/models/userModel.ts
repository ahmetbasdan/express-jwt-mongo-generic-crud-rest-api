import mongoose, { Document, Schema } from 'mongoose'

export interface IUser {
  eMail: string
  password: string
}

interface IUserModel extends IUser, Document {}

const userSchema = new Schema<IUserModel>(
  {
    eMail: {
      type: Schema.Types.String,
      required: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
  },
  { timestamps: true }
)

const userModel = mongoose.model('user', userSchema)

export default userModel
