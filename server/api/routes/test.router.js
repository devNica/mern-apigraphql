const router = require('express').Router()
const pkg = require('../../package.json')

module.exports = app => {
    app.set('pkg', pkg)
    router.get('/index', async (_, res) => {
        res.json({
            success: true,
            name: app.get('pkg').name,
            description: app.get('pkg').description,
            version: app.get('pkg').version,
            author: app.get('pkg').author
        })
    })

    return router
}