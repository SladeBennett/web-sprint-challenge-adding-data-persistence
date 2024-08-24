const router = require('express').Router()
const Resources = require('./model')

router.get('/', (req, res, next) => {
    Resources.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'Chaos strikes again in Resource/Router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router