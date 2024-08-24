const router = require('express').Router()
const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Tasks.getTasks()
    .then(tasks => {
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