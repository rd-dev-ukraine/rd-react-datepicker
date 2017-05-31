"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var dateUtils_1 = require("./dateUtils");
var parsers_1 = require("./parsers");
var DateInput = (function (_super) {
    __extends(DateInput, _super);
    function DateInput(props) {
        var _this = _super.call(this, props) || this;
        _this.parseValue = parsers_1.parserFabric(_this.props.mode, _this.currentFormat);
        _this.onChangeHandler = function (event) {
            _this.setState({ inputValue: event.currentTarget.value });
        };
        _this.onChangeDebounceHandler = function (event) {
            if (_this.debounce) {
                clearTimeout(_this.debounce);
            }
            var value = _this.parseValue(event.currentTarget.value, dateUtils_1.local);
            _this.setState({ inputValue: event.currentTarget.value });
            _this.debounce = setTimeout(function () {
                if (value && value.isValid()) {
                    _this.props.change(value);
                }
            }, 1000);
        };
        _this.onBlurHandler = function (event) {
            var value = _this.parseValue(event.currentTarget.value, dateUtils_1.local);
            if (value && value.isValid()) {
                _this.props.change(value);
            }
        };
        _this.state = {
            inputValue: _this.formatValue(_this.props.value)
        };
        return _this;
    }
    DateInput.prototype.componentWillReceiveProps = function (newProps) {
        this.setState({ inputValue: this.formatValue(newProps.value) });
    };
    DateInput.prototype.render = function () {
        var _this = this;
        return (React.createElement("input", { type: "text", className: "datepicker-actions__input", value: this.state.inputValue, disabled: this.props.disabled, onClick: function () { return _this.props.onClick && _this.props.onClick(); }, onChange: this.props.updateMode === "blur" ? this.onChangeHandler : this.onChangeDebounceHandler, onBlur: this.props.updateMode === "blur" ? this.onBlurHandler : undefined }));
    };
    Object.defineProperty(DateInput.prototype, "currentFormat", {
        get: function () {
            var type = this.props.mode || "date";
            return this.props.format || dateUtils_1.defaultFormat[type];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Formats input value based on current input type.
     * Value converted to local before formatting.
     */
    DateInput.prototype.formatValue = function (value) {
        if (value === null) {
            return "";
        }
        var mode = this.props.mode || "date";
        return mode === "date"
            ? value.clone().format(this.currentFormat)
            : value.clone().local().format(this.currentFormat);
    };
    return DateInput;
}(React.Component));
exports.DateInput = DateInput;
//# sourceMappingURL=dateInput.js.map