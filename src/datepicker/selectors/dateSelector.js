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
var DateSelector = (function (_super) {
    __extends(DateSelector, _super);
    function DateSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentMode: "day",
            value: _this.props.value.clone()
        };
        return _this;
    }
    DateSelector.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ value: nextProps.value });
    };
    DateSelector.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "date-selector" },
            this.state.currentMode === "day" &&
                React.createElement(index_1.DaySelector, { value: this.state.value, chosenDate: this.props.value.clone(), selectValue: function (value) { return _this.props.change(value.clone()); }, changeMode: function () { return _this.changeMode("month"); } }),
            this.state.currentMode === "month" &&
                React.createElement(index_1.MonthSelector, { value: this.state.value, selectValue: function (value) { return _this.changeDate(value, "day"); }, changeMode: function () { return _this.changeMode("year"); } }),
            this.state.currentMode === "year" &&
                React.createElement(index_1.YearSelector, { value: this.state.value, selectValue: function (value) { return _this.changeDate(value, "month"); }, changeMode: function () { return _this.changeMode("decade"); } }),
            this.state.currentMode === "decade" &&
                React.createElement(index_1.DecadeSelector, { value: this.state.value, selectValue: function (value) { return _this.changeDate(value, "year"); } })));
    };
    DateSelector.prototype.changeMode = function (mode) {
        this.setState({ currentMode: mode });
    };
    DateSelector.prototype.changeDate = function (date, nextMode) {
        this.setState({
            currentMode: nextMode,
            value: date
        });
    };
    return DateSelector;
}(React.Component));
exports.DateSelector = DateSelector;
//# sourceMappingURL=dateSelector.js.map