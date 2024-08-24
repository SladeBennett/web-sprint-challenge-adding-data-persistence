const router = require('express').Router()


router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'Chaos strikes again in Project/Router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router