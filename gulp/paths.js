const path = require('path');

// Get template info from composer.json file in current working directory.
const templateInfo = require(path.resolve('package.json'));

/**
 * Default paths for a project.
 */
module.exports = {
    /**
     * Path to sources directory relative to CWD.
     * @type {string}
     */
    src: path.resolve('./'),
    /**
     * Path to distribution directory relative to CWD.
     * @type {string}
     */
    dist: path.resolve('../../../../../../../../app/design/frontend/' + templateInfo.vendor),
    /**
     * Path to pub/static/frontend.
     * @type {string}
     */
    pubStatic: path.resolve('../../../../../../../../pub/static/frontend'),
    /**
     * Path to var directory.
     * @type {string}
     */
    var: path.resolve('../../../../../../../../var'),
    /**
     * Web (url) path to theme's frontend assets (without the language part)
     * @type {String}
     */
    distWeb: `/static/frontend/${templateInfo.vendor
        .charAt(0)
        .toUpperCase()}${templateInfo.vendor.slice(1)}`,
};
