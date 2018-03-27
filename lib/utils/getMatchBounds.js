/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
exports.default = getMatchBounds;
var _escapeStringRegexp = require('escape-string-regexp');
var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);
var _stripDiacritics = require('./stripDiacritics');
var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
var CASE_INSENSITIVE = 'i';
var COMBINING_MARKS = /[\u0300-\u036F]/;
function getMatchBounds(subject, search) {
  search = new RegExp((0, _escapeStringRegexp2.default)((0, _stripDiacritics2.default)(search)), CASE_INSENSITIVE);
  var matches = search.exec((0, _stripDiacritics2.default)(subject));
  if (!matches) {
    return null;
  }
  var start = matches.index;
  var matchLength = matches[0].length;
  if (COMBINING_MARKS.test(subject)) {
    for (var ii = 0; ii <= start; ii++) {
      if (COMBINING_MARKS.test(subject[ii])) {
        start++;
      }
    }
    for (var _ii = start; _ii <= start + matchLength; _ii++) {
      if (COMBINING_MARKS.test(subject[_ii])) {
        matchLength++;
      }
    }
  }
  return {
    end: start + matchLength,
    start: start
  };
}
