/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
export interface TimeScrollerProps {
    value: Moment;
    format: string;
    up: () => void;
    down: () => void;
    selectValue: () => void;
}
export declare const TimeScroller: (props: TimeScrollerProps) => React.ReactElement<TimeScrollerProps>;
