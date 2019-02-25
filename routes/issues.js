const express = require('express')
const router = express.Router()
const { postIssue, getIssues, deleteIssue, updateIssue } = require('../controllers/issues')

router.get('/:projectName', getIssues)

router.post('/:projectName', postIssue)

router.put('/:projectName', updateIssue)

router.delete('/:projectName', deleteIssue)

module.exports = router
