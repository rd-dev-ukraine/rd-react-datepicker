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
var HourSelector = (function (_super) {
    __extends(HourSelector, _super);
    function HourSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isCurrentHour = function (value) {
            return value
                && _this.props.value
                && _this.props.value.hour() === value.hour();
        };
        return _this;
    }
    HourSelector.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "date-set" },
            React.createElement("ul", { className: "date-set__dates" }, this.hours().map(function (hour) {
                return React.createElement("li", { key: hour.toISOString(), className: cn("date-set__date", { "selected": _this.isCurrentHour(hour) }), onClick: function () { return _this.props.selectValue(hour); } }, hour.format("hh"));
            }))));
    };
    HourSelector.prototype.hours = function () {
        var value = this.props.value.clone();
        var result = [];
        value.hour(value.hour() < 12 ? 0 : 12);
        for (var i = 1; i < 13; i++) {
            result.push(value.clone().add(i, "hour"));
        }
        return result;
    };
    return HourSelector;
}(React.Component));
exports.HourSelector = HourSelector;
//# sourceMappingURL=hourSelector.js.map