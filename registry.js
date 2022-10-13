const util = require('util');

const environment = require('./gulp/environment');

const DefaultRegistry = require('undertaker-registry');

function WindRegistry() {
    DefaultRegistry.call(this);
}

util.inherits(WindRegistry, DefaultRegistry);

WindRegistry.prototype.init = function(taker) {


    //taker.task(require('./gulp/tasks/copyHtml'));
    //taker.task(require('./gulp/tasks/copyImages'));
    //taker.task(require('./gulp/tasks/copyScripts'));
    //taker.task(require('./gulp/tasks/copyUnchanged'));

    //taker.task(require('./gulp/tasks/collectViewXml'));

    //taker.task(require('./gulp/tasks/clean'));
    taker.task(require('./gulp/tasks/buildTailWind'));
    //taker.task(require('./gulp/tasks/cleanCache'));
    taker.task(require('./gulp/tasks/browserSync'));

    taker.task(
        'build',
        taker.series(
            taker.parallel(
                'buildTailWind'
            )
        )
    );

    taker.task(
        'watch',
        taker.series(function enableWatch(done) {
            environment.watch = true;
            done();
        }, 'build')
    );

    taker.task('serve', taker.series('watch', 'browserSync'));
};

module.exports = new WindRegistry();
