exports.postIssue = ({ params, body, db }, res) => {
  const Project = db.import('../models/project.js')
  const Issue = db.import('../models/issue.js')
  const { projectName: name } = params

  Project.findOrCreate({
    where: {
      name,
    },
  })
    .then(project => {
      project
        .setIssue(Issue.create(body))
        .then(issue => {
          res.json(issue)
        })
        .catch(err => {
          res.status(400).json(err)
        })
    })
    .catch(err => {
      res.sendStatus(404)
    })
}

exports.getIssues = ({ params, db }, res) => {
  const Project = db.import('../models/project.js')
  const { projectName: name } = params

  Project.findOne({
    where: {
      name,
    },
  })
    .then(project => {
      project
        .getIssues()
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

exports.deleteIssue = (req, res) => {
  res.sendStatus(200)
}

exports.updateIssue = (req, res) => {
  res.sendStatus(200)
}
