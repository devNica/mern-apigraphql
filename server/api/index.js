const { BASEAPI } = require('../config/constants.config')
const testRouter = require('./routes/test.router')
const graphqlRouter = require('./routes/graphql.router')


/**
 * @author devNica | Lucas Andres Marsell
 * @description function that returns an array of routes (API) 
 * @returns Array[objects]
 */
const api_routes = () => {

    /**instantiate express to load some routers */
    const app = require('express')()

    return [
        { path: `${BASEAPI}/test`, controller: testRouter(app) },
        { path: `${BASEAPI}/graphql`, controller: graphqlRouter },
    ]
}

module.exports = {
    api_routes
}