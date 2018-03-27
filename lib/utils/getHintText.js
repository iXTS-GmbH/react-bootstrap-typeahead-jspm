/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
var _getMatchBounds = require('./getMatchBounds');
var _getMatchBounds2 = _interopRequireDefault(_getMatchBounds);
var _getOptionLabel = require('./getOptionLabel');
var _getOptionLabel2 = _interopRequireDefault(_getOptionLabel);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function getHintText(_ref) {
  var activeItem = _ref.activeItem,
      initialItem = _ref.initialItem,
      isMenuShown = _ref.isMenuShown,
      labelKey = _ref.labelKey,
      minLength = _ref.minLength,
      selected = _ref.selected,
      text = _ref.text;
  if (!text || text.length < minLength || !isMenuShown || !initialItem || initialItem.customOption || activeItem || !!selected.length) {
    return '';
  }
  var initialItemStr = (0, _getOptionLabel2.default)(initialItem, labelKey);
  var bounds = (0, _getMatchBounds2.default)(initialItemStr.toLowerCase(), text.toLowerCase());
  if (!(bounds && bounds.start === 0)) {
    return '';
  }
  return text + initialItemStr.slice(bounds.end, initialItemStr.length);
}
exports.default = getHintText;
