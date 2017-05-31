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
var timeScroller_1 = require("./timeScroller");
var TimeComponentSelector = (function (_super) {
    __extends(TimeComponentSelector, _super);
    function TimeComponentSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.plusHour = function () {
            _this.props.changeTime(_this.props.value.clone().add(1, "hour"));
        };
        _this.minusHour = function () {
            _this.props.changeTime(_this.props.value.clone().subtract(1, "hour"));
        };
        _this.plusMinute = function () {
            _this.props.changeTime(_this.props.value.clone().add(1, "minute"));
        };
        _this.minusMinute = function () {
            _this.props.changeTime(_this.props.value.clone().subtract(1, "minute"));
        };
        _this.togglePmAm = function () {
            if (_this.props.value.hour() < 12) {
                _this.props.changeTime(_this.props.value.clone().add(12, "hour"));
            }
            else {
                _this.props.changeTime(_this.props.value.clone().subtract(12, "hour"));
            }
        };
        return _this;
    }
    TimeComponentSelector.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "time-component-selector" },
            React.createElement(timeScroller_1.TimeScroller, { value: this.props.value, format: "hh", up: this.plusHour, down: this.minusHour, selectValue: function () { return _this.props.selectHour(); } }),
            React.createElement(timeScroller_1.TimeScroller, { value: this.props.value, format: "mm", up: this.plusMinute, down: this.minusMinute, selectValue: function () { return _this.props.selectMinute(); } }),
            React.createElement("span", { onClick: this.togglePmAm, className: "time-component-selector__am-pm" }, this.props.value.format("A"))));
    };
    return TimeComponentSelector;
}(React.Component));
exports.TimeComponentSelector = TimeComponentSelector;
//# sourceMappingURL=timeComponentSelector.js.map