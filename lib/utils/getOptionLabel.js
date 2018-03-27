/* */ 
(function(process) {
  'use strict';
  Object.defineProperty(exports, "__esModule", {value: true});
  var _invariant = require('invariant');
  var _invariant2 = _interopRequireDefault(_invariant);
  var _isPlainObject = require('lodash/isPlainObject');
  var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function getOptionLabel(option, labelKey) {
    var optionLabel = void 0;
    if (typeof option === 'string') {
      optionLabel = option;
    }
    if (typeof labelKey === 'function') {
      optionLabel = labelKey(option);
    } else if (typeof labelKey === 'string' && (0, _isPlainObject2.default)(option)) {
      optionLabel = option[labelKey];
    }
    !(typeof optionLabel === 'string') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'One or more options does not have a valid label string. Check the ' + '`labelKey` prop to ensure that it matches the correct option key and ' + 'provides a string for filtering and display.') : (0, _invariant2.default)(false) : void 0;
    return optionLabel;
  }
  exports.default = getOptionLabel;
})(require('process'));
