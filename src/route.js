import { Router } from 'express'
import { collection } from './db'

const router = new Router()

router.get('/', (req, res) => res.redirect(307, '/documents'))

router.route('/documents')
  .get((req, res) => {
    collection.find({})
      .then(docs => res.json(docs))
      .catch(err => res.send(err))
  })
  .post((req, res) => {
    collection.insert(req.body)
      .then(doc => res.status(201).json(doc))
      .catch(err => res.send(err))
  })

router.route('/documents/:id')
  .get((req, res) => {
    collection.findOne({ _id: req.params.id })
      .then(doc => res.json(doc))
      .catch(err => res.send(err))
  })
  .put((req, res) => {
    collection.update({ _id: req.params.id }, req.body)
      .then(doc => res.json({ updated: true }))
      .catch(err => res.send(err))
  })
  .delete((req, res) => {
    collection.remove({ _id: req.params.id })
      .then(doc => res.json({ deleted: true }))
      .catch(err => res.send(err))
  })

export default router
