const newsRouter = require('./news');
const coursesRouter = require('./courses');
const SiteRouter = require('./site');

function route(app) {
   app.use('/news', newsRouter);
   app.use('/', SiteRouter);
   app.use('/courses', coursesRouter);
}

module.exports = route;