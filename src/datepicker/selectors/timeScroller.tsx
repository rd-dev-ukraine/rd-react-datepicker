import * as React from "react";
import * as cn from "classnames";
import { Moment } from "moment";


export interface TimeScrollerProps {
    value: Moment;
    format: string;
    up: () => void;
    down: () => void;
    selectValue: () => void;
}

export const TimeScroller = (props: TimeScrollerProps): React.ReactElement<TimeScrollerProps> => (
    <div className="time-component-scroller">
        <span
            onClick={props.up}
            className={cn([
                "time-component-scroller__arrow",
                "datepicker__buttonIcon",
                "datepicker__buttonIcon-arrow-up"
            ])}
        />
        <span
            onClick={props.selectValue}
            className="time-component-scroller__value"
        >
            {props.value.format(props.format)}
        </span>
        <span
            onClick={props.down}
            className={cn([
                "time-component-scroller__arrow",
                "datepicker__buttonIcon",
                "datepicker__buttonIcon-arrow-down"
            ])}
        />
    </div>);
