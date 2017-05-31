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
var cn = require("classnames");
var dateUtils_1 = require("../dateUtils");
var periodSwitch_1 = require("./periodSwitch");
var DaySelector = (function (_super) {
    __extends(DaySelector, _super);
    function DaySelector(props) {
        var _this = _super.call(this, props) || this;
        _this.prev = function () {
            _this.setState(function (prevState) { return ({
                value: prevState.value.subtract(1, "month")
            }); });
        };
        _this.next = function () {
            _this.setState(function (prevState) { return ({
                value: prevState.value.add(1, "month")
            }); });
        };
        _this.state = {
            value: _this.props.value
        };
        return _this;
    }
    DaySelector.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ value: nextProps.value });
    };
    DaySelector.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "day-selector" },
            React.createElement(periodSwitch_1.PeriodSwitch, { period: this.state.value.format("MMMM YYYY"), next: this.next, prev: this.prev, changeMode: function () { return _this.props.changeMode(); } }),
            React.createElement("ul", { className: "day-selector__days-of-week" }, dateUtils_1.daysOfWeek().map(function (item, index) {
                return React.createElement("li", { className: "day-selector__day-of-week", key: index }, item);
            })),
            React.createElement("ul", { className: "day-selector__days-of-month" }, dateUtils_1.monthCalendar(this.state.value).map(function (day) {
                return React.createElement("li", { key: day.toISOString(), className: cn("day-selector__day-of-month", {
                        "current-month": dateUtils_1.isCurrentMonth(_this.state.value, day),
                        "out-of-month": !dateUtils_1.isCurrentMonth(_this.state.value, day),
                        "selected": dateUtils_1.isSelected(_this.props.chosenDate, day)
                    }), onClick: function () { return _this.props.selectValue(day); } }, day.format("D"));
            }))));
    };
    return DaySelector;
}(React.Component));
exports.DaySelector = DaySelector;
//# sourceMappingURL=daySelector.js.map