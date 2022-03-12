// const router = require("express").Router()
const clansRoutes =require('./clansRoutes')


let routes = [{
    path: '/clan',
    route: clansRoutes
}]


module.exports = (app)=> {
    return routes.forEach(rout=> {
        app.use(rout.path, rout.route)
    })
}