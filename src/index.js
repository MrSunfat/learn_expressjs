const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const SortMiddleware = require('./app/middleware/SortMiddleware');

const app = express();
const port = 8080;

const route = require('./routes');
const db = require('./config/db');

// Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

app.use(methodOverride('_method'));

// custom middlewares
app.use(SortMiddleware);

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

console.log(path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
