const newsRouter = require('./news');
const siteRouter = require('./site');

const route = (app) => {
    // Routing
    app.use('/news', newsRouter);
    
    app.use('/', siteRouter);
    
}

module.exports = route;