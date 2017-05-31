/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
export declare type DateSelectorMode = "day" | "month" | "year" | "decade";
export interface DateSelectorProps {
    value: Moment;
    change: (date: Moment) => void;
}
export interface DateSelectorState {
    currentMode?: DateSelectorMode;
    value?: Moment;
}
export declare class DateSelector extends React.Component<DateSelectorProps, DateSelectorState> {
    constructor(props: DateSelectorProps);
    componentWillReceiveProps(nextProps: DateSelectorProps): void;
    render(): React.ReactElement<DateSelectorProps>;
    private changeMode(mode);
    private changeDate(date, nextMode);
}
