/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _flowRight = require('lodash/flowRight');
var _flowRight2 = _interopRequireDefault(_flowRight);
var _head = require('lodash/head');
var _head2 = _interopRequireDefault(_head);
var _isEqual = require('lodash/isEqual');
var _isEqual2 = _interopRequireDefault(_isEqual);
var _noop = require('lodash/noop');
var _noop2 = _interopRequireDefault(_noop);
var _propTypes = require('prop-types');
var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactOnclickoutside = require('react-onclickoutside');
var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _deprecated = require('prop-types-extra/lib/deprecated');
var _deprecated2 = _interopRequireDefault(_deprecated);
var _highlightOnlyResultContainer = require('./highlightOnlyResultContainer');
var _highlightOnlyResultContainer2 = _interopRequireDefault(_highlightOnlyResultContainer);
var _typeaheadInnerContainer = require('./typeaheadInnerContainer');
var _typeaheadInnerContainer2 = _interopRequireDefault(_typeaheadInnerContainer);
var _propTypes3 = require('../propTypes/index');
var _utils = require('../utils/index');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }});
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function genId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return prefix + Math.random().toString(36).substr(2, 12);
}
function getInitialState(props) {
  var defaultInputValue = props.defaultInputValue,
      defaultSelected = props.defaultSelected,
      maxResults = props.maxResults,
      multiple = props.multiple;
  var selected = props.selected ? props.selected.slice() : defaultSelected.slice();
  var text = defaultInputValue;
  if (!multiple && selected.length) {
    text = (0, _utils.getOptionLabel)((0, _head2.default)(selected), props.labelKey);
    if (selected.length > 1) {
      selected = selected.slice(0, 1);
    }
  }
  return {
    activeIndex: -1,
    activeItem: null,
    initialItem: null,
    selected: selected,
    showMenu: false,
    shownResults: maxResults,
    text: text
  };
}
function typeaheadContainer(Typeahead) {
  Typeahead = (0, _flowRight2.default)(_highlightOnlyResultContainer2.default, _typeaheadInnerContainer2.default)(Typeahead);
  var WrappedTypeahead = function(_React$Component) {
    _inherits(WrappedTypeahead, _React$Component);
    function WrappedTypeahead(props) {
      _classCallCheck(this, WrappedTypeahead);
      var _this = _possibleConstructorReturn(this, (WrappedTypeahead.__proto__ || Object.getPrototypeOf(WrappedTypeahead)).call(this, props));
      _this.blur = function() {
        _this._getInputNode().blur();
        _this._hideMenu();
      };
      _this.clear = function() {
        _this.setState(getInitialState(_this.props));
        _this._updateSelected([]);
        _this._updateText('');
      };
      _this.focus = function() {
        _this._getInputNode().focus();
      };
      _this._getInputNode = function() {
        return _this._input.getInputNode();
      };
      _this._handleActiveIndexChange = function(activeIndex) {
        _this.setState({activeIndex: activeIndex});
      };
      _this._handleActiveItemChange = function(activeItem) {
        _this.setState({activeItem: activeItem});
      };
      _this._handleFocus = function(e) {
        _this.props.onFocus(e);
        _this.setState({showMenu: true});
      };
      _this._handleInitialItemChange = function(initialItem) {
        var labelKey = _this.props.labelKey;
        var currentItem = _this.state.initialItem;
        if ((0, _isEqual2.default)(initialItem, currentItem) || currentItem && initialItem && initialItem.customOption && initialItem[labelKey] === currentItem[labelKey]) {
          return;
        }
        _this.setState({initialItem: initialItem});
      };
      _this._handleInputChange = function(text) {
        var _getInitialState = getInitialState(_this.props),
            activeIndex = _getInitialState.activeIndex,
            activeItem = _getInitialState.activeItem;
        _this.setState({
          activeIndex: activeIndex,
          activeItem: activeItem,
          showMenu: true
        });
        _this._updateText(text);
      };
      _this._handlePaginate = function(e) {
        var _this$props = _this.props,
            maxResults = _this$props.maxResults,
            onPaginate = _this$props.onPaginate;
        onPaginate(e);
        _this.setState({shownResults: _this.state.shownResults + maxResults});
      };
      _this._handleSelectionAdd = function(selection) {
        var _this$props2 = _this.props,
            multiple = _this$props2.multiple,
            labelKey = _this$props2.labelKey;
        var selected = void 0;
        var text = void 0;
        if (multiple) {
          selected = _this.state.selected.concat(selection);
          text = '';
        } else {
          selected = [selection];
          text = (0, _utils.getOptionLabel)(selection, labelKey);
        }
        _this._hideMenu();
        _this._updateText(text);
        _this._updateSelected(selected);
        _this.setState({initialItem: selection});
      };
      _this._handleSelectionRemove = function(selection) {
        var selected = _this.state.selected.filter(function(option) {
          return !(0, _isEqual2.default)(option, selection);
        });
        _this.focus();
        _this._hideMenu();
        _this._updateSelected(selected);
      };
      _this.handleClickOutside = function(e) {
        _this.state.showMenu && _this._hideMenu();
      };
      _this._hideMenu = function() {
        var _getInitialState2 = getInitialState(_this.props),
            activeIndex = _getInitialState2.activeIndex,
            activeItem = _getInitialState2.activeItem,
            showMenu = _getInitialState2.showMenu,
            shownResults = _getInitialState2.shownResults;
        _this.setState({
          activeIndex: activeIndex,
          activeItem: activeItem,
          showMenu: showMenu,
          shownResults: shownResults
        });
      };
      _this._showMenu = function() {
        _this.setState({showMenu: true});
      };
      _this._updateSelected = function(selected) {
        _this.setState({selected: selected});
        _this.props.onChange(selected);
      };
      _this._updateText = function(text) {
        _this.setState({text: text});
        _this.props.onInputChange(text);
      };
      _this.state = getInitialState(props);
      return _this;
    }
    _createClass(WrappedTypeahead, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          activeIndex: this.state.activeIndex,
          onActiveItemChange: this._handleActiveItemChange,
          onInitialItemChange: this._handleInitialItemChange,
          onMenuItemClick: this._handleSelectionAdd
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._menuId = genId('rbt-menu-');
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.props.autoFocus && this.focus();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var inputValue = this._getInputNode().value;
        var labelKey = nextProps.labelKey,
            multiple = nextProps.multiple,
            selected = nextProps.selected;
        if (selected && !(0, _isEqual2.default)(selected, this.props.selected)) {
          this._updateSelected(selected);
          if (multiple) {
            return;
          }
          var text = void 0;
          if (selected.length) {
            text = (0, _utils.getOptionLabel)((0, _head2.default)(selected), labelKey);
          } else if (this.state.text !== inputValue) {
            text = inputValue;
          } else {
            text = '';
          }
          this._updateText(text);
        }
        var newSelected = selected || this.state.selected;
        if (!multiple && newSelected.length > 1) {
          newSelected = newSelected.slice(0, 1);
          this._updateSelected(newSelected);
          this._updateText((0, _utils.getOptionLabel)((0, _head2.default)(newSelected), labelKey));
          return;
        }
        if (multiple !== this.props.multiple) {
          this._updateText('');
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _props = this.props,
            allowNew = _props.allowNew,
            emptyLabel = _props.emptyLabel,
            filterBy = _props.filterBy,
            labelKey = _props.labelKey,
            minLength = _props.minLength,
            options = _props.options,
            paginate = _props.paginate;
        var _state = this.state,
            shownResults = _state.shownResults,
            showMenu = _state.showMenu,
            text = _state.text;
        var results = [];
        if (text.length >= minLength) {
          var callback = Array.isArray(filterBy) ? function(option) {
            return (0, _utils.defaultFilterBy)(option, _this2.state, _this2.props);
          } : function(option) {
            return filterBy(option, text);
          };
          results = options.filter(callback);
        }
        var shouldPaginate = paginate && results.length > shownResults;
        results = (0, _utils.getTruncatedOptions)(results, shownResults);
        if (allowNew) {
          results = (0, _utils.addCustomOption)(results, text, labelKey);
        }
        var isMenuShown = !!(text.length >= minLength && showMenu && (results.length || emptyLabel));
        return _react2.default.createElement(Typeahead, _extends({}, this.props, this.state, {
          inputRef: function inputRef(input) {
            return _this2._input = input;
          },
          isMenuShown: isMenuShown,
          menuId: this.props.menuId || this._menuId,
          onActiveIndexChange: this._handleActiveIndexChange,
          onActiveItemChange: this._handleActiveItemChange,
          onClear: this.clear,
          onFocus: this._handleFocus,
          onHide: this._hideMenu,
          onInitialItemChange: this._handleInitialItemChange,
          onInputChange: this._handleInputChange,
          onPaginate: this._handlePaginate,
          onSelectionAdd: this._handleSelectionAdd,
          onSelectionRemove: this._handleSelectionRemove,
          onShow: this._showMenu,
          paginate: shouldPaginate,
          results: results
        }));
      }
    }]);
    return WrappedTypeahead;
  }(_react2.default.Component);
  WrappedTypeahead.displayName = 'Typeahead';
  WrappedTypeahead.propTypes = {
    a11yNumResults: _propTypes2.default.func,
    a11yNumSelected: _propTypes2.default.func,
    allowNew: _propTypes2.default.bool,
    autoFocus: _propTypes2.default.bool,
    bodyContainer: _propTypes2.default.bool,
    caseSensitive: (0, _propTypes3.checkPropType)(_propTypes2.default.bool, _propTypes3.caseSensitiveType),
    clearButton: _propTypes2.default.bool,
    defaultInputValue: (0, _propTypes3.checkPropType)(_propTypes2.default.string, _propTypes3.defaultInputValueType),
    defaultSelected: _propTypes3.optionType,
    disabled: _propTypes2.default.bool,
    dropup: _propTypes2.default.bool,
    emptyLabel: _propTypes2.default.node,
    filterBy: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string.isRequired), _propTypes2.default.func]),
    highlightOnlyResult: (0, _propTypes3.checkPropType)(_propTypes2.default.bool, _propTypes3.highlightOnlyResultType),
    ignoreDiacritics: (0, _propTypes3.checkPropType)(_propTypes2.default.bool, _propTypes3.ignoreDiacriticsType),
    inputProps: (0, _propTypes3.checkPropType)(_propTypes2.default.object, _propTypes3.inputPropsType),
    isLoading: _propTypes2.default.bool,
    labelKey: (0, _propTypes3.checkPropType)(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]), _propTypes3.labelKeyType),
    maxResults: _propTypes2.default.number,
    menuId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    minLength: _propTypes2.default.number,
    multiple: _propTypes2.default.bool,
    name: (0, _deprecated2.default)(_propTypes2.default.string, 'Use `inputProps` instead'),
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onInputChange: _propTypes2.default.func,
    onKeyDown: _propTypes2.default.func,
    onMenuHide: _propTypes2.default.func,
    onMenuShow: _propTypes2.default.func,
    onPaginate: _propTypes2.default.func,
    options: _propTypes3.optionType.isRequired,
    paginate: _propTypes2.default.bool,
    placeholder: _propTypes2.default.string,
    renderMenu: _propTypes2.default.func,
    selected: _propTypes3.optionType,
    selectHintOnEnter: _propTypes2.default.bool,
    submitFormOnEnter: _propTypes2.default.bool
  };
  WrappedTypeahead.defaultProps = {
    a11yNumResults: function a11yNumResults(results) {
      var resultString = (0, _utils.pluralize)('result', results.length);
      return resultString + '. Use up and down arrow keys to navigate.';
    },
    a11yNumSelected: function a11yNumSelected(selected) {
      return (0, _utils.pluralize)('selection', selected.length);
    },
    allowNew: false,
    autoFocus: false,
    bodyContainer: false,
    caseSensitive: false,
    clearButton: false,
    defaultInputValue: '',
    defaultSelected: [],
    disabled: false,
    dropup: false,
    emptyLabel: 'No matches found.',
    filterBy: [],
    highlightOnlyResult: false,
    ignoreDiacritics: true,
    inputProps: {},
    isLoading: false,
    labelKey: 'label',
    maxResults: 100,
    minLength: 0,
    multiple: false,
    onBlur: _noop2.default,
    onChange: _noop2.default,
    onFocus: _noop2.default,
    onInputChange: _noop2.default,
    onKeyDown: _noop2.default,
    onMenuHide: _noop2.default,
    onMenuShow: _noop2.default,
    onPaginate: _noop2.default,
    paginate: true,
    placeholder: '',
    selectHintOnEnter: false,
    submitFormOnEnter: false
  };
  WrappedTypeahead.childContextTypes = {
    activeIndex: _propTypes2.default.number.isRequired,
    onActiveItemChange: _propTypes2.default.func.isRequired,
    onInitialItemChange: _propTypes2.default.func.isRequired,
    onMenuItemClick: _propTypes2.default.func.isRequired
  };
  return (0, _reactOnclickoutside2.default)(WrappedTypeahead);
}
exports.default = typeaheadContainer;
