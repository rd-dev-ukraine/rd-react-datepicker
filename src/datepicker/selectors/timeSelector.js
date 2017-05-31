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
var index_1 = require("./index");
var TimeSelector = (function (_super) {
    __extends(TimeSelector, _super);
    function TimeSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.changeMode = function (mode) {
            _this.setState({ currentMode: mode });
        };
        _this.state = {
            currentMode: "time"
        };
        return _this;
    }
    TimeSelector.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            this.state.currentMode === "time" &&
                React.createElement(index_1.TimeComponentSelector, { value: this.props.value, changeTime: this.changeTime, selectHour: function () { return _this.changeMode("hour"); }, selectMinute: function () { return _this.changeMode("minute"); } }),
            this.state.currentMode === "hour" &&
                React.createElement(index_1.HourSelector, { value: this.props.value, selectValue: this.changeTime }),
            this.state.currentMode === "minute" &&
                React.createElement(index_1.MinuteSelector, { value: this.props.value, selectValue: this.changeTime })));
    };
    TimeSelector.prototype.changeTime = function (time) {
        this.props.change(time);
        this.changeMode("time");
    };
    return TimeSelector;
}(React.Component));
exports.TimeSelector = TimeSelector;
//# sourceMappingURL=timeSelector.js.map