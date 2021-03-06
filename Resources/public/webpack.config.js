// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
    // directory where all compiled assets will be stored
    //
    // /projectroot/src/Mesd/PresentationBundle/Resources/public/.
    // to
    // /projectroot/web/build
    //
    // that's 5 directories
    .setOutputPath('./../../../../../web/build/')

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath('/build')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // will output as web/build/app.js
    .addEntry('coreui', './node_modules/@coreui/ajax/Static_Starter_GULP/js/app.js')
    .addEntry('app', './assets/js/app.js')

    // will output as web/build/global.css
    .addStyleEntry('normalize', './assets/css/normalize.css')
    .addStyleEntry('global', './assets/css/global.scss')
    .addStyleEntry('style', './assets/css/style.css')

    // allow sass/scss files to be processed
    .enableSassLoader()

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    .enableSourceMaps(!Encore.isProduction())

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();