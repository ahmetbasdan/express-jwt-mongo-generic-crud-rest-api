import express from 'express'
import routers from './routers'
import configs from './configs'
import * as db from './db'

configs.dotenvConfig.installDotenvConfig()

const app = express()

app.use(express.json())

app.use(process.env.APP_PREFIX!, routers)

app.listen(process.env.APP_PORT, () => {
  console.log(`http://localhost:${process.env.APP_PORT}`)
  db.mongoose.connectMongoose()
})
