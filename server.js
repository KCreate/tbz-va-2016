const express               = require('express');
const app                   = express();
const path                  = require('path');
const expressHandlebars     = require('express-handlebars');
const handlebars            = expressHandlebars.create({
    defaultLayout: 'main',
    partialsDir: [
        'views/components/'
    ]
});

// Webpack configuration
const webpackConfig         = require('./webpack.config.js');
const webpack               = require('webpack');
const webpackDevMiddleware  = require('webpack-dev-middleware');
const webpackHotMiddleware  = require('webpack-hot-middleware');
const compiler              = webpack(webpackConfig);

// Configure handlebars
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// App options
app.set('strict routing', true);
app.disable('x-powered-by');

// Webpack injection
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

// Static assets
app.use(express.static(path.resolve(__dirname, 'static/')));

// Routing
app.use(require('./routes/router.js'));

// Start listening
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
