const jokeRouter = require('./joke');

let initialRoutes = (app) => {
    app.use('/joke', jokeRouter);
};

module.exports = initialRoutes;