// Dependencies
const {
  watch,
  series
} = require('gulp');
const bs = require('browser-sync').create();
const config = require('../config.js');
const {
  handleError
} = require('../helpers/handle-errors.js');

// Task
function watchfiles() {
  bs.init(config.browsersync.src, config.browsersync.opts);
  watch(config.styles.src, series('styles', 'scsslint')).on('error', handleError('styles'));
};

exports.watch = watchfiles;
