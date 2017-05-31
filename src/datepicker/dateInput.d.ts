/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
import { DatePickerMode } from "./dateUtils";
export interface DateInputProps {
    mode?: DatePickerMode;
    format?: string;
    updateMode?: "blur" | "change";
    onClick?: () => void;
    disabled?: boolean;
    value: Moment;
    change: (newValue: Moment) => void;
}
export interface DateInputState {
    inputValue: string;
}
export declare class DateInput extends React.Component<DateInputProps, DateInputState> {
    private debounce;
    private parseValue;
    constructor(props: DateInputProps);
    componentWillReceiveProps(newProps: DateInputProps): void;
    render(): JSX.Element;
    private readonly currentFormat;
    private onChangeHandler;
    private onChangeDebounceHandler;
    private onBlurHandler;
    /**
     * Formats input value based on current input type.
     * Value converted to local before formatting.
     */
    private formatValue(value);
}
