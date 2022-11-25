"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Header = _interopRequireDefault(require("./Header"));
var _Combobox = _interopRequireDefault(require("./Combobox"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function noop() {}
function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var arr = [];
  for (var value = 0; value < length; value += step) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }
  return arr;
}
function toNearestValidTime(time, hourOptions, minuteOptions, secondOptions) {
  var hour = hourOptions.slice().sort(function (a, b) {
    return Math.abs(time.hour() - a) - Math.abs(time.hour() - b);
  })[0];
  var minute = minuteOptions.slice().sort(function (a, b) {
    return Math.abs(time.minute() - a) - Math.abs(time.minute() - b);
  })[0];
  var second = secondOptions.slice().sort(function (a, b) {
    return Math.abs(time.second() - a) - Math.abs(time.second() - b);
  })[0];
  return (0, _moment.default)("".concat(hour, ":").concat(minute, ":").concat(second), 'HH:mm:ss');
}
var Panel = /*#__PURE__*/function (_Component) {
  _inherits(Panel, _Component);
  var _super = _createSuper(Panel);
  function Panel() {
    var _this;
    _classCallCheck(this, Panel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {};
    _this.onChange = function (newValue) {
      var onChange = _this.props.onChange;
      _this.setState({
        value: newValue
      });
      onChange(newValue);
    };
    _this.onAmPmChange = function (ampm) {
      var onAmPmChange = _this.props.onAmPmChange;
      onAmPmChange(ampm);
    };
    _this.onCurrentSelectPanelChange = function (currentSelectPanel) {
      _this.setState({
        currentSelectPanel: currentSelectPanel
      });
    };
    _this.disabledHours = function () {
      var _this$props = _this.props,
        use12Hours = _this$props.use12Hours,
        disabledHours = _this$props.disabledHours;
      var disabledOptions = disabledHours();
      if (use12Hours && Array.isArray(disabledOptions)) {
        if (_this.isAM()) {
          disabledOptions = disabledOptions.filter(function (h) {
            return h < 12;
          }).map(function (h) {
            return h === 0 ? 12 : h;
          });
        } else {
          disabledOptions = disabledOptions.map(function (h) {
            return h === 12 ? 12 : h - 12;
          });
        }
      }
      return disabledOptions;
    };
    return _this;
  }
  _createClass(Panel, [{
    key: "close",
    value:
    // https://github.com/ant-design/ant-design/issues/5829
    function close() {
      var onEsc = this.props.onEsc;
      onEsc();
    }
  }, {
    key: "isAM",
    value: function isAM() {
      var defaultOpenValue = this.props.defaultOpenValue;
      var value = this.state.value;
      var realValue = value || defaultOpenValue;
      return realValue.hour() >= 0 && realValue.hour() < 12;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        prefixCls = _this$props2.prefixCls,
        className = _this$props2.className,
        placeholder = _this$props2.placeholder,
        disabledMinutes = _this$props2.disabledMinutes,
        disabledSeconds = _this$props2.disabledSeconds,
        hideDisabledOptions = _this$props2.hideDisabledOptions,
        showHour = _this$props2.showHour,
        showMinute = _this$props2.showMinute,
        showSecond = _this$props2.showSecond,
        format = _this$props2.format,
        defaultOpenValue = _this$props2.defaultOpenValue,
        clearText = _this$props2.clearText,
        onEsc = _this$props2.onEsc,
        addon = _this$props2.addon,
        use12Hours = _this$props2.use12Hours,
        focusOnOpen = _this$props2.focusOnOpen,
        onKeyDown = _this$props2.onKeyDown,
        hourStep = _this$props2.hourStep,
        minuteStep = _this$props2.minuteStep,
        secondStep = _this$props2.secondStep,
        inputReadOnly = _this$props2.inputReadOnly,
        clearIcon = _this$props2.clearIcon,
        allowAllTimeValues = _this$props2.allowAllTimeValues;
      var _this$state = this.state,
        value = _this$state.value,
        currentSelectPanel = _this$state.currentSelectPanel;
      var disabledHourOptions = this.disabledHours();
      var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
      var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
      var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions, hourStep);
      var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions, minuteStep);
      var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions, secondStep);
      var validDefaultOpenValue = toNearestValidTime(defaultOpenValue, hourOptions, minuteOptions, secondOptions);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)(className, "".concat(prefixCls, "-inner"))
      }, /*#__PURE__*/_react.default.createElement(_Header.default, {
        clearText: clearText,
        prefixCls: prefixCls,
        defaultOpenValue: validDefaultOpenValue,
        value: value,
        currentSelectPanel: currentSelectPanel,
        onEsc: onEsc,
        format: format,
        placeholder: placeholder,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: this.disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onChange: this.onChange,
        focusOnOpen: focusOnOpen,
        onKeyDown: onKeyDown,
        inputReadOnly: inputReadOnly,
        clearIcon: clearIcon,
        allowAllTimeValues: allowAllTimeValues
      }), /*#__PURE__*/_react.default.createElement(_Combobox.default, {
        prefixCls: prefixCls,
        value: value,
        defaultOpenValue: validDefaultOpenValue,
        format: format,
        onChange: this.onChange,
        onAmPmChange: this.onAmPmChange,
        showHour: showHour,
        showMinute: showMinute,
        showSecond: showSecond,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: this.disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onCurrentSelectPanelChange: this.onCurrentSelectPanelChange,
        use12Hours: use12Hours,
        onEsc: onEsc,
        isAM: this.isAM()
      }), addon(this));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if ('value' in props) {
        return _objectSpread(_objectSpread({}, state), {}, {
          value: props.value
        });
      }
      return null;
    }
  }]);
  return Panel;
}(_react.Component);
Panel.defaultProps = {
  prefixCls: 'rc-time-picker-panel',
  onChange: noop,
  disabledHours: noop,
  disabledMinutes: noop,
  disabledSeconds: noop,
  defaultOpenValue: (0, _moment.default)(),
  use12Hours: false,
  addon: noop,
  onKeyDown: noop,
  onAmPmChange: noop,
  inputReadOnly: false
};
var _default = Panel;
exports.default = _default;