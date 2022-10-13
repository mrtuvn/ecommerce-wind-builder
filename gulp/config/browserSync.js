const argv = require('yargs').argv;

const paths = require('../paths');

/**
 * Settings for serve task.
 */
const settings = {
    /**
     * BrowserSync configuration.
     */
    browserSync: {
        open: argv.open,
        https: false,
        proxy: {
            target: 'http://app.contribution.test',
        },
        rewriteRules: [
            {
                match: '.app.contribution.test',
                replace: '',
            },
        ],
        serveStatic: [
            {
                route: `${paths.distWeb}/en_US`,
                dir: `${paths.dist}/web`,
            }
        ],
        files: [`${paths.dist}/**/*`],
        reloadDelay: 1000,
        cors: true,
    },
};

module.exports = settings;
