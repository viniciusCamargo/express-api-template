import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import route from './route'
import log from './log'
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', route)

const port = 3030
app.listen(port, (err) => {
  if (err) console.log('err')
  log.bgBlue(`Running at http://localhost:${port}`)
})
