require('dotenv').config()

/*constants for application configuration*/
module.exports = {
    SECRET_KEY : process.env.SECRET_KEY || '@13k5@NDER_G0NZ@135',
    BASEAPI: process.env.BASEAPI || '/lxd/gql/v1',
    SERVER_PORT: process.env.SERVER_PORT || 4200
}