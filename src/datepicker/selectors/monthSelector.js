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
var MonthSelector = (function (_super) {
    __extends(MonthSelector, _super);
    function MonthSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.prev = function () {
            _this.setState(function (prevState) { return ({
                value: prevState.value.subtract(1, "year")
            }); });
        };
        _this.next = function () {
            _this.setState(function (prevState) { return ({
                value: prevState.value.add(1, "year")
            }); });
        };
        _this.state = {
            value: _this.props.value
        };
        return _this;
    }
    MonthSelector.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ value: nextProps.value });
    };
    MonthSelector.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "date-set" },
            React.createElement(periodSwitch_1.PeriodSwitch, { period: this.state.value.format("YYYY"), next: this.next, prev: this.prev, changeMode: function () { return _this.props.changeMode(); } }),
            React.createElement("ul", { className: "date-set__dates" }, this.monthes().map(function (month) {
                return React.createElement("li", { key: month.toISOString(), className: cn("date-set__date", { "selected": dateUtils_1.isSelected(_this.state.value, month) }), onClick: function () { return _this.props.selectValue(month); } }, month.format("MMMM"));
            }))));
    };
    MonthSelector.prototype.monthes = function () {
        var result = [];
        for (var monthNum = 0; monthNum < 12; monthNum++) {
            var date = this.state.value.clone();
            result.push(date.month(monthNum));
        }
        return result;
    };
    return MonthSelector;
}(React.Component));
exports.MonthSelector = MonthSelector;
//# sourceMappingURL=monthSelector.js.map