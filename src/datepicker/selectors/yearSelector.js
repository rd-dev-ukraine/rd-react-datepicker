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
var YearSelector = (function (_super) {
    __extends(YearSelector, _super);
    function YearSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.prev = function () {
            _this.setState(function (prevState) { return ({
                value: prevState.value.subtract(10, "year")
            }); });
        };
        _this.next = function () {
            _this.setState(function (prevState) { return ({
                value: prevState.value.add(10, "year")
            }); });
        };
        _this.state = {
            value: _this.props.value
        };
        return _this;
    }
    YearSelector.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ value: nextProps.value });
    };
    YearSelector.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "date-set" },
            React.createElement(periodSwitch_1.PeriodSwitch, { period: dateUtils_1.formatDecade(this.state.value), next: this.next, prev: this.prev, changeMode: function () { return _this.props.changeMode(); } }),
            React.createElement("ul", { className: "date-set__dates" }, this.years().map(function (year) {
                return React.createElement("li", { key: year.toISOString(), className: cn("date-set__date", { "selected": dateUtils_1.isSelected(_this.state.value, year) }), onClick: function () { return _this.props.selectValue(year); } }, year.format("YYYY"));
            }))));
    };
    YearSelector.prototype.years = function () {
        var start = dateUtils_1.decade(this.state.value)[0];
        var result = [];
        for (var year = 0; year < 10; year++) {
            result.push(start.clone().add(year, "year"));
        }
        return result;
    };
    return YearSelector;
}(React.Component));
exports.YearSelector = YearSelector;
//# sourceMappingURL=yearSelector.js.map