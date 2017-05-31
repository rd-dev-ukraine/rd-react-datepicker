import * as React from "react";
import { Moment } from "moment";

import { DatePickerMode, defaultFormat, local } from "./dateUtils";
import { ParserFunction, parserFabric } from "./parsers";


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

export class DateInput extends React.Component<DateInputProps, DateInputState> {
    private debounce: number;
    private parseValue: ParserFunction = parserFabric(this.props.mode, this.currentFormat);

    constructor(props: DateInputProps) {
        super(props);

        this.state = {
            inputValue: this.formatValue(this.props.value)
        };
    }

    public componentWillReceiveProps(newProps: DateInputProps) {
        this.setState({ inputValue: this.formatValue(newProps.value) });
    }

    public render() {
        return (
            <input
                type="text"
                className="datepicker-actions__input"
                value={this.state.inputValue}
                disabled={this.props.disabled}
                onClick={() => this.props.onClick && this.props.onClick()}
                onChange={this.props.updateMode === "blur" ? this.onChangeHandler : this.onChangeDebounceHandler}
                onBlur={this.props.updateMode === "blur" ? this.onBlurHandler : undefined}
            />
        );
    }

    private get currentFormat(): string {
        const type = this.props.mode || "date";

        return this.props.format || defaultFormat[type];
    }

    private onChangeHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ inputValue: event.currentTarget.value });
    }

    private onChangeDebounceHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        if (this.debounce) {
            clearTimeout(this.debounce);
        }

        const value = this.parseValue(event.currentTarget.value, local);

        this.setState({ inputValue: event.currentTarget.value });

        this.debounce = setTimeout(
            () => {
                if (value && value.isValid()) {
                    this.props.change(value);
                }
            },
            1000
        ) as any;
    }

    private onBlurHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        const value = this.parseValue(event.currentTarget.value, local);

        if (value && value.isValid()) {
            this.props.change(value);
        }
    }

    /**
     * Formats input value based on current input type.
     * Value converted to local before formatting.
     */
    private formatValue(value: Moment): string {
        if (value === null) {
            return "";
        }

        const mode: DatePickerMode = this.props.mode || "date";

        return mode === "date"
            ? value.clone().format(this.currentFormat)
            : value.clone().local().format(this.currentFormat);
    }
}