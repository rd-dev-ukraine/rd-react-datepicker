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
var MinuteSelector = (function (_super) {
    __extends(MinuteSelector, _super);
    function MinuteSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinuteSelector.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "date-set" },
            React.createElement("ul", { className: "date-set__dates" }, this.minutes().map(function (minute) {
                return React.createElement("li", { key: minute.toISOString(), className: "date-set__date", onClick: function () { return _this.props.selectValue(minute); } }, minute.format("mm"));
            }))));
    };
    MinuteSelector.prototype.minutes = function () {
        var result = [];
        for (var i = 0; i < 60; i = i + 5) {
            result.push(this.props.value.clone().minute(i));
        }
        return result;
    };
    return MinuteSelector;
}(React.Component));
exports.MinuteSelector = MinuteSelector;
//# sourceMappingURL=minuteSelector.js.map