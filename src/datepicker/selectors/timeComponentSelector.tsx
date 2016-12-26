import * as React from 'react';
import { Moment } from 'moment';

import { TimeScroller } from './timeScroller';

export interface TimeComponentSelectorProps {
    value: Moment;
    selectHour: () => void;
    selectMinute: () => void;
    changeTime: (newTime: Moment) => void;
}

export class TimeComponentSelector extends React.Component<TimeComponentSelectorProps, void> {

    private plusHour(): void {
        this.props.changeTime(this.props.value.clone().add(1, 'hour'));
    }

    private minusHour(): void {
        this.props.changeTime(this.props.value.clone().subtract(1, 'hour'));
    }

    private plusMinute(): void {
        this.props.changeTime(this.props.value.clone().add(1, 'minute'));
    }

    private minusMinute(): void {
        this.props.changeTime(this.props.value.clone().subtract(1, 'minute'));
    }

    private togglePmAm(): void {
        if (this.props.value.hour() < 12) {
            this.props.changeTime(this.props.value.clone().add(12, 'hour'));
        } else {
            this.props.changeTime(this.props.value.clone().subtract(12, 'hour'));
        }
    }

    render() {
        return (
            <div className="time-component-selector">
                <TimeScroller
                    value={this.props.value}
                    format="hh"
                    up={() => this.plusHour()}
                    down={() => this.minusHour()}
                    selectValue={() => this.props.selectHour()}/>
                <TimeScroller
                    value={this.props.value}
                    format="mm"
                    up={() => this.plusMinute()}
                    down={() => this.minusMinute()}
                    selectValue={() => this.props.selectMinute()}/>
                <span className="time-component-selector__am-pm"
                      onClick={() => this.togglePmAm()}>
                    {this.props.value.format('A')}
                 </span>
            </div>
        )
    }
}