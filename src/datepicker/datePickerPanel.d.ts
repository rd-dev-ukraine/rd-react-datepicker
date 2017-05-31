/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
import { DatePickerMode } from "./dateUtils";
import "./datepicker.css";
export interface DatePickerPanelProps {
    mode?: DatePickerMode;
    value: Moment;
    change: (newDate: Moment) => void;
}
export interface DatePickePanelState {
    value: Moment;
}
export declare class DatePickerPanel extends React.Component<DatePickerPanelProps, DatePickePanelState> {
    static defaultProps: {
        mode: string;
    };
    constructor(props: DatePickerPanelProps);
    change(newDate: Moment, changeSource: "date" | "time"): void;
    componentWillReceiveProps(newProps: DatePickerPanelProps): void;
    render(): React.ReactElement<DatePickerPanelProps>;
}
