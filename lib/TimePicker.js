"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _rcTrigger = _interopRequireDefault(require("rc-trigger"));
var _moment = _interopRequireDefault(require("moment"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Panel = _interopRequireDefault(require("./Panel"));
var _placements = _interopRequireDefault(require("./placements"));
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
function refFn(field, component) {
  this[field] = component;
}
var Picker = /*#__PURE__*/function (_Component) {
  _inherits(Picker, _Component);
  var _super = _createSuper(Picker);
  function Picker(props) {
    var _this;
    _classCallCheck(this, Picker);
    _this = _super.call(this, props);
    _this.onPanelChange = function (value) {
      _this.setValue(value);
    };
    _this.onAmPmChange = function (ampm) {
      var onAmPmChange = _this.props.onAmPmChange;
      onAmPmChange(ampm);
    };
    _this.onClear = function (event) {
      event.stopPropagation();
      _this.setValue(null);
      _this.setOpen(false);
    };
    _this.onVisibleChange = function (open) {
      _this.setOpen(open);
    };
    _this.onEsc = function () {
      _this.setOpen(false);
      _this.focus();
    };
    _this.onKeyDown = function (e) {
      if (e.keyCode === 40) {
        _this.setOpen(true);
      }
    };
    _this.saveInputRef = refFn.bind(_assertThisInitialized(_this), "picker");
    _this.savePanelRef = refFn.bind(_assertThisInitialized(_this), "panelInstance");
    var defaultOpen = props.defaultOpen,
      defaultValue = props.defaultValue,
      _props$open = props.open,
      _open = _props$open === void 0 ? defaultOpen : _props$open,
      _props$value = props.value,
      _value = _props$value === void 0 ? defaultValue : _props$value;
    _this.state = {
      open: _open,
      value: _value
    };
    return _this;
  }
  _createClass(Picker, [{
    key: "setValue",
    value: function setValue(value) {
      var onChange = this.props.onChange;
      if (!("value" in this.props)) {
        this.setState({
          value: value
        });
      }
      onChange(value);
    }
  }, {
    key: "getFormat",
    value: function getFormat() {
      var _this$props = this.props,
        format = _this$props.format,
        showHour = _this$props.showHour,
        showMinute = _this$props.showMinute,
        showSecond = _this$props.showSecond,
        use12Hours = _this$props.use12Hours;
      if (format) {
        return format;
      }
      if (use12Hours) {
        var fmtString = [showHour ? "h" : "", showMinute ? "mm" : "", showSecond ? "ss" : ""].filter(function (item) {
          return !!item;
        }).join(":");
        return fmtString.concat(" a");
      }
      return [showHour ? "HH" : "", showMinute ? "mm" : "", showSecond ? "ss" : ""].filter(function (item) {
        return !!item;
      }).join(":");
    }
  }, {
    key: "getPanelElement",
    value: function getPanelElement() {
      var _this$props2 = this.props,
        prefixCls = _this$props2.prefixCls,
        placeholder = _this$props2.placeholder,
        disabledHours = _this$props2.disabledHours,
        disabledMinutes = _this$props2.disabledMinutes,
        disabledSeconds = _this$props2.disabledSeconds,
        hideDisabledOptions = _this$props2.hideDisabledOptions,
        inputReadOnly = _this$props2.inputReadOnly,
        showHour = _this$props2.showHour,
        showMinute = _this$props2.showMinute,
        showSecond = _this$props2.showSecond,
        defaultOpenValue = _this$props2.defaultOpenValue,
        clearText = _this$props2.clearText,
        addon = _this$props2.addon,
        use12Hours = _this$props2.use12Hours,
        focusOnOpen = _this$props2.focusOnOpen,
        onKeyDown = _this$props2.onKeyDown,
        hourStep = _this$props2.hourStep,
        minuteStep = _this$props2.minuteStep,
        secondStep = _this$props2.secondStep,
        clearIcon = _this$props2.clearIcon,
        allowAllTimeValues = _this$props2.allowAllTimeValues;
      var value = this.state.value;
      return /*#__PURE__*/_react.default.createElement(_Panel.default, {
        clearText: clearText,
        prefixCls: "".concat(prefixCls, "-panel"),
        ref: this.savePanelRef,
        value: value,
        inputReadOnly: inputReadOnly,
        onChange: this.onPanelChange,
        onAmPmChange: this.onAmPmChange,
        defaultOpenValue: defaultOpenValue,
        showHour: showHour,
        showMinute: showMinute,
        showSecond: showSecond,
        onEsc: this.onEsc,
        format: this.getFormat(),
        placeholder: placeholder,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        hideDisabledOptions: hideDisabledOptions,
        use12Hours: use12Hours,
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondStep: secondStep,
        addon: addon,
        focusOnOpen: focusOnOpen,
        onKeyDown: onKeyDown,
        clearIcon: clearIcon,
        allowAllTimeValues: allowAllTimeValues
      });
    }
  }, {
    key: "getPopupClassName",
    value: function getPopupClassName() {
      var _this$props3 = this.props,
        showHour = _this$props3.showHour,
        showMinute = _this$props3.showMinute,
        showSecond = _this$props3.showSecond,
        use12Hours = _this$props3.use12Hours,
        prefixCls = _this$props3.prefixCls,
        popupClassName = _this$props3.popupClassName;
      var selectColumnCount = 0;
      if (showHour) {
        selectColumnCount += 1;
      }
      if (showMinute) {
        selectColumnCount += 1;
      }
      if (showSecond) {
        selectColumnCount += 1;
      }
      if (use12Hours) {
        selectColumnCount += 1;
      }
      // Keep it for old compatibility
      return (0, _classnames.default)(popupClassName, _defineProperty({}, "".concat(prefixCls, "-panel-narrow"), (!showHour || !showMinute || !showSecond) && !use12Hours), "".concat(prefixCls, "-panel-column-").concat(selectColumnCount));
    }
  }, {
    key: "setOpen",
    value: function setOpen(open) {
      var _this$props4 = this.props,
        onOpen = _this$props4.onOpen,
        onClose = _this$props4.onClose;
      var currentOpen = this.state.open;
      if (currentOpen !== open) {
        if (!("open" in this.props)) {
          this.setState({
            open: open
          });
        }
        if (open) {
          onOpen({
            open: open
          });
        } else {
          onClose({
            open: open
          });
        }
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.picker.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.picker.blur();
    }
  }, {
    key: "renderClearButton",
    value: function renderClearButton() {
      var _this2 = this;
      var value = this.state.value;
      var _this$props5 = this.props,
        prefixCls = _this$props5.prefixCls,
        allowEmpty = _this$props5.allowEmpty,
        clearIcon = _this$props5.clearIcon,
        clearText = _this$props5.clearText,
        disabled = _this$props5.disabled;
      if (!allowEmpty || !value || disabled) {
        return null;
      }
      if ( /*#__PURE__*/_react.default.isValidElement(clearIcon)) {
        var _ref = clearIcon.props || {},
          _onClick = _ref.onClick;
        return /*#__PURE__*/_react.default.cloneElement(clearIcon, {
          onClick: function onClick() {
            if (_onClick) _onClick.apply(void 0, arguments);
            _this2.onClear.apply(_this2, arguments);
          }
        });
      }
      return /*#__PURE__*/_react.default.createElement("a", {
        role: "button",
        className: "".concat(prefixCls, "-clear"),
        title: clearText,
        onClick: this.onClear,
        tabIndex: 0
      }, clearIcon || /*#__PURE__*/_react.default.createElement("i", {
        className: "".concat(prefixCls, "-clear-icon")
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        prefixCls = _this$props6.prefixCls,
        placeholder = _this$props6.placeholder,
        placement = _this$props6.placement,
        align = _this$props6.align,
        id = _this$props6.id,
        disabled = _this$props6.disabled,
        transitionName = _this$props6.transitionName,
        style = _this$props6.style,
        className = _this$props6.className,
        inputClassName = _this$props6.inputClassName,
        getPopupContainer = _this$props6.getPopupContainer,
        name = _this$props6.name,
        autoComplete = _this$props6.autoComplete,
        onFocus = _this$props6.onFocus,
        onBlur = _this$props6.onBlur,
        autoFocus = _this$props6.autoFocus,
        inputReadOnly = _this$props6.inputReadOnly,
        inputIcon = _this$props6.inputIcon,
        popupStyle = _this$props6.popupStyle;
      var _this$state = this.state,
        open = _this$state.open,
        value = _this$state.value;
      var popupClassName = this.getPopupClassName();
      return /*#__PURE__*/_react.default.createElement(_rcTrigger.default, {
        prefixCls: "".concat(prefixCls, "-panel"),
        popupClassName: popupClassName,
        popupStyle: popupStyle,
        popup: this.getPanelElement(),
        popupAlign: align,
        builtinPlacements: _placements.default,
        popupPlacement: placement,
        action: disabled ? [] : ["click"],
        destroyPopupOnHide: true,
        getPopupContainer: getPopupContainer,
        popupTransitionName: transitionName,
        popupVisible: open,
        onPopupVisibleChange: this.onVisibleChange
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: (0, _classnames.default)(prefixCls, className),
        style: style
      }, /*#__PURE__*/_react.default.createElement("input", {
        className: (0, _classnames.default)("".concat(prefixCls, "-input"), inputClassName),
        ref: this.saveInputRef,
        type: "text",
        placeholder: placeholder,
        name: name,
        onKeyDown: this.onKeyDown,
        disabled: disabled,
        value: value && value.format(this.getFormat()) || "",
        autoComplete: autoComplete,
        onFocus: onFocus,
        onBlur: onBlur,
        autoFocus: autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        ,
        onChange: noop,
        readOnly: !!inputReadOnly,
        id: id
      }), inputIcon || /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }), this.renderClearButton()));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var newState = {};
      if ("value" in props) {
        newState.value = props.value;
      }
      if (props.open !== undefined) {
        newState.open = props.open;
      }
      return Object.keys(newState).length > 0 ? _objectSpread(_objectSpread({}, state), newState) : null;
    }
  }]);
  return Picker;
}(_react.Component);
Picker.defaultProps = {
  clearText: "clear",
  prefixCls: "rc-time-picker",
  defaultOpen: false,
  inputReadOnly: false,
  style: {},
  className: "",
  inputClassName: "",
  popupClassName: "",
  popupStyle: {},
  align: {},
  defaultOpenValue: (0, _moment.default)(),
  allowEmpty: true,
  showHour: true,
  showMinute: true,
  showSecond: true,
  disabledHours: noop,
  disabledMinutes: noop,
  disabledSeconds: noop,
  hideDisabledOptions: false,
  placement: "bottomLeft",
  onChange: noop,
  onAmPmChange: noop,
  onOpen: noop,
  onClose: noop,
  onFocus: noop,
  onBlur: noop,
  addon: noop,
  use12Hours: false,
  focusOnOpen: false,
  onKeyDown: noop,
  allowAllTimeValues: false
};
var _default = Picker;
exports.default = _default;