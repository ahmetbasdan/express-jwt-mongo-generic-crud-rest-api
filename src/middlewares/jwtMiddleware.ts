import { Request, Response, NextFunction } from 'express'
import jwtConfig from '../configs/jwtConfig'

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      return res.status(403).json({ message: 'Token not found' })
    }
    const token = req.headers.authorization

    const decodedToken = jwtConfig.decode(token)
    req.body.userId = decodedToken.userId

    next()
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed',
    })
  }
}

export default jwtMiddleware
