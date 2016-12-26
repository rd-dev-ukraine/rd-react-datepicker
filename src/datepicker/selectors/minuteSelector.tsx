import * as React from 'react';
import { Moment } from 'moment';

export interface MinuteSelectorProps {
    value: Moment;
    selectValue: (date: Moment) => void;
}

export class MinuteSelector extends React.Component<MinuteSelectorProps, void> {

    private minutes(): Moment[] {
        const result: Moment[] = [];

        for (let i = 0; i < 60; i = i + 5) {
            result.push(this.props.value.clone().minute(i));
        }

        return result;
    }

    render() {
        return (
            <div className="date-set">
                <ul className="date-set__dates">
                    {this.minutes().map((minute) =>
                        <li key={minute.toISOString()}
                            className="date-set__date"
                            onClick={() => this.props.selectValue(minute)}>
                            {minute.format('mm')}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}