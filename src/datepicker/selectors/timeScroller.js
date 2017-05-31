"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var cn = require("classnames");
exports.TimeScroller = function (props) { return (React.createElement("div", { className: "time-component-scroller" },
    React.createElement("span", { onClick: props.up, className: cn([
            "time-component-scroller__arrow",
            "datepicker__buttonIcon",
            "datepicker__buttonIcon-arrow-up"
        ]) }),
    React.createElement("span", { onClick: props.selectValue, className: "time-component-scroller__value" }, props.value.format(props.format)),
    React.createElement("span", { onClick: props.down, className: cn([
            "time-component-scroller__arrow",
            "datepicker__buttonIcon",
            "datepicker__buttonIcon-arrow-down"
        ]) }))); };
//# sourceMappingURL=timeScroller.js.map