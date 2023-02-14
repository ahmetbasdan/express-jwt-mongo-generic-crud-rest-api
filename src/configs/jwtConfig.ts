import jsonwebtoken from 'jsonwebtoken'
import ms from 'ms'

interface IPayload {
  userId: string
}

const encode = (props: IPayload): string => {
  const result = jsonwebtoken.sign(props, process.env.JWT_SECRET_KEY!, {
    expiresIn: ms(process.env.JWR_EXP!),
  })
  return result
}

const decode = (token: string): IPayload => {
  const result = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY!) as IPayload
  return result
}

export default {
  encode,
  decode,
}
