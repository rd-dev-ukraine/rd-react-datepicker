import * as React from 'react';
import { Moment } from 'moment';

export interface TimeScrollerProps {
    value: Moment;
    format: string;
    up: () => void;
    down: () => void;
    selectValue: () => void;
}

export class TimeScroller extends React.Component<TimeScrollerProps, void> {

    public render() {
        return (
            <div className="time-component-scroller">
                <span className="time-component-scroller__arrow datepicker__buttonIcon datepicker__buttonIcon-arrow-up"
                      onClick={this.props.up}></span>
                <span className="time-component-scroller__value"
                      onClick={this.props.selectValue}>
                    {this.props.value.format(this.props.format)}
                </span>
                <span className="time-component-scroller__arrow datepicker__buttonIcon datepicker__buttonIcon-arrow-down"
                      onClick={this.props.down}></span>
            </div>
        )
    }
}