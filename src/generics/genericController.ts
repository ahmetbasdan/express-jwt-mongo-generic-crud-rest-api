import { Request, Response, NextFunction } from 'express'
import { Model } from 'mongoose'

const post = (model: Model<any>) => (req: Request, res: Response, next: NextFunction) => {
  console.log('Creating new document for ' + model.modelName)

  const doc = new model({
    ...req.body,
  })

  doc
    .save()
    .then((result: any) => res.status(200).json({ result }))
    .catch((error: any) => res.status(500).json({ error }))
}

const get = (model: Model<any>) => (req: Request, res: Response, next: NextFunction) => {
  console.log('Getting all document for ' + model.modelName)
  const { populate, select, pageSize, pageNumber, filter } = req.body

  const docs = model.find(filter || {})

  if (select) {
    docs.select(select)
  }

  if (populate) {
    docs.populate(populate)
  }
  if (pageNumber && pageSize) {
    docs.skip((pageNumber - 1) * pageSize).limit(pageSize)
  }

  docs.then((result) => res.status(200).send({ result })).catch((error) => res.status(500).send({ error }))
}

const getById = (model: Model<any>) => (req: Request, res: Response, next: NextFunction) => {
  console.log('Getting by id document for ' + model.modelName)
  const { id } = req.params
  const { populate, select } = req.body

  model
    .findById(id)
    .select(select || '')
    .populate(populate || [])
    .then((result) => {
      if (result) {
        res.status(200).json({ result })
      } else {
        res.status(404).json({ message: 'Not Found' })
      }
    })
    .catch((error) => res.status(500).json({ error }))
}

const put = (model: Model<any>) => (req: Request, res: Response, next: NextFunction) => {
  console.log('Updating document for ' + model.modelName)
  const { id } = req.params

  model
    .findById(id)
    .then((result) => {
      if (result) {
        result.set(req.body)

        return result.save().then((result: any) => res.status(200).json({ result }))
      } else {
        res.status(404).json({ message: 'Not Found' })
      }
    })
    .catch((error) => res.status(500).json({ error }))
}

const remove = (model: Model<any>) => (req: Request, res: Response, next: NextFunction) => {
  console.log('Removing document for ' + model.modelName)
  const { id } = req.params

  model
    .findById(id)
    .then((result) => {
      if (result) {
        return model.findByIdAndRemove(req.params.id).then((result: any) => res.status(200).json({ result }))
      } else {
        res.status(404).json({ message: 'Not Found' })
      }
    })
    .catch((error) => res.status(500).json({ error }))
}

const getCount = (model: Model<any>) => (req: Request, res: Response) => {
  console.log('Getting count document for ' + model.modelName)
  const { filter } = req.body

  model
    .find(filter || {})
    .count()
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ error }))
}

export default {
  post,
  get,
  getById,
  put,
  remove,
  getCount,
}
