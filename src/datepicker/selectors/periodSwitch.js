"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var cn = require("classnames");
exports.PeriodSwitch = function (props) { return (React.createElement("div", { className: "period-switch" },
    React.createElement("span", { onClick: function () { return props.prev(); }, className: cn([
            "period-switch__change",
            "datepicker__buttonIcon",
            "datepicker__buttonIcon-arrow-left"
        ]) }),
    React.createElement("span", { onClick: function () { return props.changeMode(); }, className: "period-switch__period" }, props.period),
    React.createElement("span", { onClick: function () { return props.next(); }, className: cn([
            "period-switch__change",
            "datepicker__buttonIcon",
            "datepicker__buttonIcon-arrow-right"
        ]) }))); };
//# sourceMappingURL=periodSwitch.js.map