const morgan = require('morgan')
const {json, urlencoded} = require('express')
const cors = require('cors')

module.exports = async function (app, routes=[]) {
  //console.log('estas son las rutas', routes)

    if (!app || !Array.isArray(routes)) {
        return;
    }

    app.use(cors({ origin: "*" }));
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(morgan('dev'))

    app.get("/", async (_, res) => res.send(await publicIp.v4()));

    // define app routes
    for (let route of routes) {
        const { path = null, controller = null } = route;

        if (path && controller) {
        app.use(path, controller);
        }
    }

    // app.listen(4300, (err) => {
    //     if (err) {
    //       console.log(err);
    //       return;
    //     }
    
    //     console.log(`Server running at port: 4300`);
    // });
    
    return app;

};
