const router = require('express').Router()
const Projects = require('./model')

router.get('/', (req, res, next) => {
    Projects.getProjects()
    .then(projects => {
        projects.forEach(project => {
            if (project.project_completed === 0) {
                project.project_completed = false
            } else if (project.project_completed === 1) {
                project.project_completed = true
            }
        })
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