// imports
const app = require('./app')
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db, (error, response) => {

    error ? console.log("Database connection failed")
          : console.log('Database connection established correctly');

    app.listen(config.port, () => {
        console.log(`API REST running on http://localhost:${config.port}`);
    });
});



