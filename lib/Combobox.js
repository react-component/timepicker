"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Select = _interopRequireDefault(require("./Select"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var formatOption = function formatOption(option, disabledOptions) {
  var value = "".concat(option);
  if (option < 10) {
    value = "0".concat(option);
  }
  var disabled = false;
  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }
  return {
    value: value,
    disabled: disabled
  };
};
var Combobox = /*#__PURE__*/function (_Component) {
  _inherits(Combobox, _Component);
  var _super = _createSuper(Combobox);
  function Combobox() {
    var _this;
    _classCallCheck(this, Combobox);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.onItemChange = function (type, itemValue) {
      var _this$props = _this.props,
        onChange = _this$props.onChange,
        defaultOpenValue = _this$props.defaultOpenValue,
        use12Hours = _this$props.use12Hours,
        propValue = _this$props.value,
        isAM = _this$props.isAM,
        onAmPmChange = _this$props.onAmPmChange;
      var value = (propValue || defaultOpenValue).clone();
      if (type === 'hour') {
        if (use12Hours) {
          if (isAM) {
            value.hour(+itemValue % 12);
          } else {
            value.hour(+itemValue % 12 + 12);
          }
        } else {
          value.hour(+itemValue);
        }
      } else if (type === 'minute') {
        value.minute(+itemValue);
      } else if (type === 'ampm') {
        var ampm = itemValue.toUpperCase();
        if (use12Hours) {
          if (ampm === 'PM' && value.hour() < 12) {
            value.hour(value.hour() % 12 + 12);
          }
          if (ampm === 'AM') {
            if (value.hour() >= 12) {
              value.hour(value.hour() - 12);
            }
          }
        }
        onAmPmChange(ampm);
      } else {
        value.second(+itemValue);
      }
      onChange(value);
    };
    _this.onEnterSelectPanel = function (range) {
      var onCurrentSelectPanelChange = _this.props.onCurrentSelectPanelChange;
      onCurrentSelectPanelChange(range);
    };
    return _this;
  }
  _createClass(Combobox, [{
    key: "getHourSelect",
    value: function getHourSelect(hour) {
      var _this2 = this;
      var _this$props2 = this.props,
        prefixCls = _this$props2.prefixCls,
        hourOptions = _this$props2.hourOptions,
        disabledHours = _this$props2.disabledHours,
        showHour = _this$props2.showHour,
        use12Hours = _this$props2.use12Hours,
        onEsc = _this$props2.onEsc;
      if (!showHour) {
        return null;
      }
      var disabledOptions = disabledHours();
      var hourOptionsAdj;
      var hourAdj;
      if (use12Hours) {
        hourOptionsAdj = [12].concat(hourOptions.filter(function (h) {
          return h < 12 && h > 0;
        }));
        hourAdj = hour % 12 || 12;
      } else {
        hourOptionsAdj = hourOptions;
        hourAdj = hour;
      }
      return /*#__PURE__*/_react.default.createElement(_Select.default, {
        prefixCls: prefixCls,
        options: hourOptionsAdj.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        selectedIndex: hourOptionsAdj.indexOf(hourAdj),
        type: "hour",
        onSelect: this.onItemChange,
        onMouseEnter: function onMouseEnter() {
          return _this2.onEnterSelectPanel('hour');
        },
        onEsc: onEsc
      });
    }
  }, {
    key: "getMinuteSelect",
    value: function getMinuteSelect(minute) {
      var _this3 = this;
      var _this$props3 = this.props,
        prefixCls = _this$props3.prefixCls,
        minuteOptions = _this$props3.minuteOptions,
        disabledMinutes = _this$props3.disabledMinutes,
        defaultOpenValue = _this$props3.defaultOpenValue,
        showMinute = _this$props3.showMinute,
        propValue = _this$props3.value,
        onEsc = _this$props3.onEsc;
      if (!showMinute) {
        return null;
      }
      var value = propValue || defaultOpenValue;
      var disabledOptions = disabledMinutes(value.hour());
      return /*#__PURE__*/_react.default.createElement(_Select.default, {
        prefixCls: prefixCls,
        options: minuteOptions.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        selectedIndex: minuteOptions.indexOf(minute),
        type: "minute",
        onSelect: this.onItemChange,
        onMouseEnter: function onMouseEnter() {
          return _this3.onEnterSelectPanel('minute');
        },
        onEsc: onEsc
      });
    }
  }, {
    key: "getSecondSelect",
    value: function getSecondSelect(second) {
      var _this4 = this;
      var _this$props4 = this.props,
        prefixCls = _this$props4.prefixCls,
        secondOptions = _this$props4.secondOptions,
        disabledSeconds = _this$props4.disabledSeconds,
        showSecond = _this$props4.showSecond,
        defaultOpenValue = _this$props4.defaultOpenValue,
        propValue = _this$props4.value,
        onEsc = _this$props4.onEsc;
      if (!showSecond) {
        return null;
      }
      var value = propValue || defaultOpenValue;
      var disabledOptions = disabledSeconds(value.hour(), value.minute());
      return /*#__PURE__*/_react.default.createElement(_Select.default, {
        prefixCls: prefixCls,
        options: secondOptions.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        selectedIndex: secondOptions.indexOf(second),
        type: "second",
        onSelect: this.onItemChange,
        onMouseEnter: function onMouseEnter() {
          return _this4.onEnterSelectPanel('second');
        },
        onEsc: onEsc
      });
    }
  }, {
    key: "getAMPMSelect",
    value: function getAMPMSelect() {
      var _this5 = this;
      var _this$props5 = this.props,
        prefixCls = _this$props5.prefixCls,
        use12Hours = _this$props5.use12Hours,
        format = _this$props5.format,
        isAM = _this$props5.isAM,
        onEsc = _this$props5.onEsc;
      if (!use12Hours) {
        return null;
      }
      var AMPMOptions = ['am', 'pm'] // If format has A char, then we should uppercase AM/PM
      .map(function (c) {
        return format.match(/\sA/) ? c.toUpperCase() : c;
      }).map(function (c) {
        return {
          value: c
        };
      });
      var selected = isAM ? 0 : 1;
      return /*#__PURE__*/_react.default.createElement(_Select.default, {
        prefixCls: prefixCls,
        options: AMPMOptions,
        selectedIndex: selected,
        type: "ampm",
        onSelect: this.onItemChange,
        onMouseEnter: function onMouseEnter() {
          return _this5.onEnterSelectPanel('ampm');
        },
        onEsc: onEsc
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        prefixCls = _this$props6.prefixCls,
        defaultOpenValue = _this$props6.defaultOpenValue,
        propValue = _this$props6.value;
      var value = propValue || defaultOpenValue;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "-combobox")
      }, this.getHourSelect(value.hour()), this.getMinuteSelect(value.minute()), this.getSecondSelect(value.second()), this.getAMPMSelect(value.hour()));
    }
  }]);
  return Combobox;
}(_react.Component);
var _default = Combobox;
exports.default = _default;