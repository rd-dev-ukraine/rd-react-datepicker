import * as React from "react";
import { Moment } from "moment";

import { TimeComponentSelector, HourSelector, MinuteSelector } from "./index";


export type TimeSelectorMode = "time" | "hour" | "minute";

export interface TimeSelectorProps {
    value: Moment;
    change: (date: Moment) => void;
}

export interface TimeSelectorState {
    currentMode: TimeSelectorMode;
}

export class TimeSelector extends React.Component<TimeSelectorProps, TimeSelectorState> {

    constructor(props: TimeSelectorProps) {
        super(props);

        this.state = {
            currentMode: "time"
        };
    }

    public render(): React.ReactElement<TimeSelectorProps> {
        return (
            <div>
                {
                    this.state.currentMode === "time" &&
                    <TimeComponentSelector
                        value={this.props.value}
                        changeTime={this.changeTime}
                        selectHour={() => this.changeMode("hour")}
                        selectMinute={() => this.changeMode("minute")}
                    />
                }
                {
                    this.state.currentMode === "hour" &&
                    <HourSelector
                        value={this.props.value}
                        selectValue={this.changeTime}
                    />
                }
                {
                    this.state.currentMode === "minute" &&
                    <MinuteSelector
                        value={this.props.value}
                        selectValue={this.changeTime}
                    />
                }
            </div>
        );
    }

    private changeMode = (mode: TimeSelectorMode): void => {
        this.setState({ currentMode: mode });
    }

    private changeTime(time: Moment): void {
        this.props.change(time);
        this.changeMode("time");
    }
}