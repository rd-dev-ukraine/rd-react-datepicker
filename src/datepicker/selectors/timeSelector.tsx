import * as React from 'react';
import { Moment } from 'moment';

import { TimeComponentSelector, HourSelector, MinuteSelector } from './index';

export type TimeSelectorMode = 'time' | 'hour' | 'minute';

export interface TimeSelectorProps {
    value: Moment;
    change: (date: Moment) => void;
}

export interface TimeSelectorState {
    currentMode: TimeSelectorMode;
}

export class TimeSelector extends React.Component<TimeSelectorProps, TimeSelectorState> {

    constructor(props) {
        super(props);

        this.state = {
            currentMode: 'time'
        }
    }

    private changeMode(mode: TimeSelectorMode): void {
        this.setState({currentMode: mode})
    }

    private changeTime(time: Moment): void {
        this.props.change(time);
        this.changeMode('time');
    }

    render() {
        return (
            <div>
                {
                    this.state.currentMode === 'time' &&
                    <TimeComponentSelector
                        value={this.props.value}
                        changeTime={(newTime) => this.changeTime(newTime)}
                        selectHour={() => this.changeMode('hour')}
                        selectMinute={() => this.changeMode('minute')}/>
                }
                {
                    this.state.currentMode === 'hour' &&
                    <HourSelector
                        value={this.props.value}
                        selectValue={(newTime) => this.changeTime(newTime)}/>
                }
                {
                    this.state.currentMode === 'minute' &&
                    <MinuteSelector
                        value={this.props.value}
                        selectValue={(newTime) => this.changeTime(newTime)}/>
                }
            </div>
        )
    }
}