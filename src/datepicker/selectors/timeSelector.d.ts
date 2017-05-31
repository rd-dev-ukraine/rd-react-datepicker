/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
export declare type TimeSelectorMode = "time" | "hour" | "minute";
export interface TimeSelectorProps {
    value: Moment;
    change: (date: Moment) => void;
}
export interface TimeSelectorState {
    currentMode: TimeSelectorMode;
}
export declare class TimeSelector extends React.Component<TimeSelectorProps, TimeSelectorState> {
    constructor(props: TimeSelectorProps);
    render(): React.ReactElement<TimeSelectorProps>;
    private changeMode;
    private changeTime(time);
}
