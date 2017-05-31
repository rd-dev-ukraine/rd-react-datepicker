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
var rd_react_overlay_1 = require("rd-react-overlay");
var datePickerPanel_1 = require("./datePickerPanel");
var dateInput_1 = require("./dateInput");
var DatePicker = (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: false,
            alignment: {
                target: {
                    horizontal: 1 /* Left */,
                    vertical: 3 /* Bottom */
                },
                overlay: {
                    horizontal: 1 /* Left */,
                    vertical: 1 /* Top */
                }
            }
        };
        return _this;
    }
    DatePicker.prototype.handleClick = function () {
        this.setState({ visible: true });
    };
    DatePicker.prototype.render = function () {
        var _this = this;
        return (React.createElement(rd_react_overlay_1.OverlayContainer, null,
            React.createElement("div", { className: "datepicker-actions" },
                React.createElement(dateInput_1.DateInput, { mode: this.props.mode, format: this.props.format, updateMode: this.props.updateMode, onClick: function () { return _this.handleClick(); }, disabled: this.props.disabled, value: this.props.value, change: function (newValue) { return _this.props.change(newValue); } }),
                this.props.showClearButton &&
                    React.createElement("button", { type: "button", className: "datepicker-actions__button", disabled: this.props.disabled, onClick: function () { return _this.props.change(null); } },
                        React.createElement("span", { className: "datepicker__buttonIcon datepicker__buttonIcon-close" }))),
            React.createElement(rd_react_overlay_1.Overlay, { visible: this.state.visible, onClickOutside: function (clickedOnContainer) { return _this.setState({ visible: clickedOnContainer }); }, alignment: this.state.alignment }, function (left, top) {
                return React.createElement("div", { style: ({ position: "absolute", top: top, left: left }) },
                    React.createElement(datePickerPanel_1.DatePickerPanel, { value: _this.props.value, mode: _this.props.mode, change: function (newDate) { return _this.props.change(newDate); } }));
            })));
    };
    return DatePicker;
}(React.Component));
exports.DatePicker = DatePicker;
//# sourceMappingURL=datePicker.js.map