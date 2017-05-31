/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
import { Alignment } from "rd-react-overlay";
import { DateInputProps } from "./dateInput";
export interface DatePickerProps {
    showClearButton?: boolean;
    value: Moment;
    change: (newDate: Moment | null) => void;
}
export interface DatePickerState {
    visible: boolean;
    alignment?: Alignment;
}
export declare class DatePicker extends React.Component<DatePickerProps & DateInputProps, DatePickerState> {
    constructor(props: DatePickerProps & DateInputProps);
    handleClick(): void;
    render(): React.ReactElement<DatePickerProps & DateInputProps>;
}
