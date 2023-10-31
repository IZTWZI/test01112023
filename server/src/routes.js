const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

const CreamController = require('./controllers/CreamController')

module.exports = (app) => {
    /* RESFUL Api for users management */
    // get all user
    //app.get('/users',isAuthenController,UserController.index),
    app.get('/users',isAuthenController,UserController.index),

    // create user
    app.post('/user',UserController.create),

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)

    // delete user
    app.delete('/user/:userId',UserController.remove)

    // get user by id
    app.get('/user/:userId',UserController.show)

    app.post('/login',UserAuthenController.login)


    // get all short
    app.get('/creams',CreamController.index),

    // create short
    app.post('/cream',CreamController.create),

    // edit short
    app.put('/cream/:creamId', CreamController.put)

    // delete short
    app.delete('/cream/:creamId',CreamController.remove)
    
    // get short by id
    app.get('/cream/:creamId',CreamController.show)

}