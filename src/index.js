import express from 'express'
import bodyParser from 'body-parser'
// import monk from 'monk'
import morgan from 'morgan'
import chalk from 'chalk'

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// // mongoose.connect('mongodb://localhost:27017/filtrando-imoveis')
// mongoose.connect('mongodb://3Z77Q84w79U8C8T:75efm7257j4885595BrNp23923q4M4ghpt44pG2NjpFG9UBanh@ds161497.mlab.com:61497/imo')
// mongoose.set('debug', true)

// const Imovel = require('./model')

app.get('/', (req, res) => {
  res.send('oi')
})

const port = 3030
app.listen(port, (err) => {
  if (err) console.log('err')

  console.log('Running at:', chalk.cyan(`http://localhost:${port}`))
})
