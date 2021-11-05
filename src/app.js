const express = require('express');
const logger = require('morgan');
const db = require('./config/db');
const { configEnv } = require('./config/config');

//routes
const moviesRoutes = require('./api/movies/movies.routes');
const actorsRoutes = require('./api/actors/actors.routes');
const directorsRoutes = require('./api/directors/directors.routes');
const usersRoutes = require('./api/users/users.routes');

const { initialData } = require('./config/dataInitial');

const app = express();

/**
 * Initial data remove
 */
initialData();
db.sync();
/**
 * Initial data remove
 */
app.use(express.json());

app.use(logger('tiny'));

app.use('/api/movies', moviesRoutes);
app.use('/api/actors', actorsRoutes);
app.use('/api/directors', directorsRoutes);
app.use('/api/users', usersRoutes);

app.use('/api', (req, res) => {
  res.status(200).json({ msg: 'Hello Welcome to my API' });
});

app.listen(configEnv.port, () => {
  console.log('server running on port: ' + configEnv.port);
});

module.exports = app;
