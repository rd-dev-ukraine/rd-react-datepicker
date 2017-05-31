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
var selectors_1 = require("./selectors");
var dateUtils_1 = require("./dateUtils");
require("./datepicker.css");
var DatePickerPanel = (function (_super) {
    __extends(DatePickerPanel, _super);
    function DatePickerPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: dateUtils_1.local()
        };
        return _this;
    }
    DatePickerPanel.prototype.change = function (newDate, changeSource) {
        if (changeSource === "date") {
            newDate = dateUtils_1.local([
                newDate.year(),
                newDate.month(),
                newDate.date(),
                this.state.value.hour(),
                this.state.value.minute(),
                0
            ]);
        }
        else if (changeSource === "time") {
            newDate = dateUtils_1.local([
                this.state.value.year(),
                this.state.value.month(),
                newDate.date(),
                newDate.hour(),
                newDate.minute(),
                0
            ]);
        }
        this.props.change(newDate);
    };
    DatePickerPanel.prototype.componentWillReceiveProps = function (newProps) {
        this.setState({
            value: newProps.value !== null
                ? newProps.value
                : dateUtils_1.local()
        });
    };
    DatePickerPanel.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "datepicker-panel" },
            (this.props.mode === "date" || this.props.mode === "datetime") &&
                React.createElement(selectors_1.DateSelector, { change: function (newDate) { return _this.change(newDate, "date"); }, value: this.state.value }),
            (this.props.mode === "time" || this.props.mode === "datetime") &&
                React.createElement(selectors_1.TimeSelector, { change: function (newTime) { return _this.change(newTime, "time"); }, value: this.state.value })));
    };
    return DatePickerPanel;
}(React.Component));
DatePickerPanel.defaultProps = {
    mode: "date"
};
exports.DatePickerPanel = DatePickerPanel;
//# sourceMappingURL=datePickerPanel.js.map