const express = require('express')
const helmet = require('helmet')
var cors = require('cors')
const db = require('./models').sequelize

db.authenticate()
  .then(() => {
    const { PORT } = process.env

    const issuesRouter = require('./routes/issues')

    const app = express()
      .use(helmet())
      .use(cors())
      .use(express.json())
      .use(
        express.urlencoded({
          extended: false,
        })
      )

    app.use((req, res, next) => {
      req.db = db
      next()
    })

    app.use('/api/issues', issuesRouter)

    module.exports = app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
