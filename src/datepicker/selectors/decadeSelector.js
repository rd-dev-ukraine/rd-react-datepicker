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
var DecadeSelector = (function (_super) {
    __extends(DecadeSelector, _super);
    function DecadeSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.prev = function () {
            _this.setState(function (prevState) { return ({
                value: prevState.value.subtract(100, "year")
            }); });
        };
        _this.next = function () {
            _this.setState(function (prevState) { return ({
                value: prevState.value.add(100, "year")
            }); });
        };
        _this.state = {
            value: _this.props.value
        };
        return _this;
    }
    DecadeSelector.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ value: nextProps.value });
    };
    DecadeSelector.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "date-set" },
            React.createElement(periodSwitch_1.PeriodSwitch, { period: dateUtils_1.formatCentury(this.state.value), next: this.next, prev: this.prev, changeMode: function () { return false; } }),
            React.createElement("ul", { className: "date-set__dates" }, this.decades().map(function (decade) {
                return React.createElement("li", { key: decade.toISOString(), className: cn("date-set__date", {
                        "selected": dateUtils_1.isDecadeSelected(_this.state.value, decade)
                    }), onClick: function () { return _this.props.selectValue(decade); } }, dateUtils_1.formatDecade(decade));
            }))));
    };
    DecadeSelector.prototype.decades = function () {
        var startYear = this.state.value.year() - this.state.value.year() % 100;
        var start = this.state.value.clone().year(startYear);
        var result = [];
        for (var year = 0; year < 100; year = year + 10) {
            result.push(start.clone().add(year, "year"));
        }
        return result;
    };
    return DecadeSelector;
}(React.Component));
exports.DecadeSelector = DecadeSelector;
//# sourceMappingURL=decadeSelector.js.map