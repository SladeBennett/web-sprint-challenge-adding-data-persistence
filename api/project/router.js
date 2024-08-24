const router = require('express').Router()
const Projects = require('./model')

router.get('/', (req, res, next) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'Chaos strikes again in Project/Router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router