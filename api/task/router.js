const router = require('express').Router()
const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Tasks.getTasks()
    .then(tasks => {
        tasks.forEach(task => {
            if (task.task_completed === 0) {
                task.task_completed = false
            } else if (task.task_completed === 1) {
                task.task_completed = true
            }
        })
        res.status(200).json(tasks)
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'Chaos strikes again in Task/Router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router