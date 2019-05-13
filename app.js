
const express = require('express');
const app = express();
const port = 3000;

//To create a virtual path prefix (where the path does not actually exist in the file system) 
//for files that are served by the express.static function, specify a mount path for the static directory
app.use('/static', express.static('public'));

// Javascript modules for pug files
const routes = require('./routes');
const projectRoutes = require('./routes/projects.js');
app.use(routes);
app.use(projectRoutes);

//Use pug templates with view engine
app.set('view engine', 'pug');

// 404 Not Found Error
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// 500 Internal Server Error
app.use((req, res, next) => {
    const err = new Error('SERVER ERROR');
    err.status = 500;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status || 500);
    if (err.status === 404 ){
        console.log("The route doesn't exist");
         res.render('error')
    } else{
        console.log('Internal Server Error');
        res.render('error');
    }
});

// starts server and listens on port 3000 and 'process.env.PORT' for hosting on Heroku
//app.listen(port, () => console.log(`app listening on port ${port}!`));
app.listen(process.env.PORT || 3000, () => console.log(`app listening on port ${port}!`));