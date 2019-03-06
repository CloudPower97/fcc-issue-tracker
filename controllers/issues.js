exports.postIssue = ({ params, body, db }, res) => {
  const Project = db.import('../models/project.js')
  const Issue = db.import('../models/issue.js')
  const { projectName: name } = params

  Project.findOrCreate({
    where: {
      name,
    },
  })
    .then(([project]) => {
      Issue.create(body)
        .then(issue => {
          project
            .addIssue(issue)
            .then(() => {
              res.status(201).json({ id: issue.id, ...body })
            })
            .catch(err => {
              res.status(400).json(err)
            })
        })
        .catch(err => {
          res.status(400).json(err)
        })
    })
    .catch(err => {
      res.sendStatus(404)
    })
}

exports.getIssues = ({ params, db, query }, res) => {
  const Project = db.import('../models/project.js')
  const { projectName: name } = params

  Project.findOne({
    where: {
      name,
    },
  })
    .then(project => {
      project
        .getIssues({
          where: Object.entries(query).map(([name, value]) => {
            return {
              [name]: value,
            }
          }),
        })
        .then(issues => {
          res.json(issues)
        })
        .catch(err => {
          res.status(400).json(err)
        })
    })
    .catch(() => {
      res.sendStatus(404)
    })
}

exports.deleteIssue = ({ body, db }, res) => {
  const Issue = db.import('../models/issue.js')

  Issue.destroy({
    where: {
      id: body._id,
    },
  })
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.json(err)
    })
}

exports.updateIssue = ({ body, db }, res) => {
  const Issue = db.import('../models/issue.js')

  Issue.findOne({
    where: {
      id: body._id,
    },
  })
    .then(issue => {
      delete body._id

      issue
        .update(body)
        .then(issue => {
          res.json(issue)
        })
        .catch(err => {
          res.json(err)
        })
    })
    .catch(() => {
      res.sendStatus(404)
    })
}
