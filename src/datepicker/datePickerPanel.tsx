import * as React from "react";
import { Moment } from "moment";

import { DateSelector, TimeSelector } from "./selectors";
import { local, DatePickerMode } from "./dateUtils";

import "./datepicker.css";


export interface DatePickerPanelProps {
    mode?: DatePickerMode;
    value: Moment;
    change: (newDate: Moment) => void;
}

export interface DatePickePanelState {
    value: Moment;
}

export class DatePickerPanel extends React.Component<DatePickerPanelProps, DatePickePanelState> {
    static defaultProps = {
        mode: "date"
    };

    constructor(props: DatePickerPanelProps) {
        super(props);

        this.state = {
            value: local()
        };
    }

    public change(newDate: Moment, changeSource: "date" | "time"): void {
        if (changeSource === "date") {
            newDate = local([
                newDate.year(),
                newDate.month(),
                newDate.date(),
                this.state.value.hour(),
                this.state.value.minute(),
                0
            ]);
        } else if (changeSource === "time") {
            newDate = local([
                this.state.value.year(),
                this.state.value.month(),
                newDate.date(),
                newDate.hour(),
                newDate.minute(),
                0
            ]);
        }

        this.props.change(newDate);
    }

    public componentWillReceiveProps(newProps: DatePickerPanelProps): void {
        this.setState({
            value: newProps.value !== null
                ? newProps.value
                : local()
        });
    }

    public render(): React.ReactElement<DatePickerPanelProps> {
        return (
            <div className="datepicker-panel">
                {
                    (this.props.mode === "date" || this.props.mode === "datetime") &&
                    <DateSelector
                        change={(newDate: Moment) => this.change(newDate, "date")}
                        value={this.state.value}
                    />
                }
                {
                    (this.props.mode === "time" || this.props.mode === "datetime") &&
                    <TimeSelector
                        change={(newTime: Moment) => this.change(newTime, "time")}
                        value={this.state.value}
                    />
                }
            </div>
        );
    }
}