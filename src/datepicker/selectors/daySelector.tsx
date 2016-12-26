import * as React from 'react';
import { Moment } from 'moment';

import { daysOfWeek, monthCalendar, isCurrentMonth, isSelected } from '../dateUtils';

import { PeriodSwitch } from './periodSwitch';

export interface DaySelectorProps {
    value: Moment;
    chosenDate: Moment;
    selectValue: (value: Moment) => void;
    changeMode: () => void;
}

export interface DaySelectorState {
    value: Moment;
}

export class DaySelector extends React.Component<DaySelectorProps, DaySelectorState> {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        }
    }

    private prev(): void {
        this.setState(prevState => ({
            value: prevState.value.subtract(1, 'month')
        }))
    }

    private next(): void {
        this.setState(prevState => ({
            value: prevState.value.add(1, 'month')
        }))
    }

    private addLiClass(date: Moment): string {
        let classStr = 'day-selector__day-of-month';

        classStr += isCurrentMonth(this.state.value, date) ? ' current-month' : ' out-of-month';
        classStr += isSelected(this.props.chosenDate, date) ? ' selected' : '';

        return classStr;
    }

    componentWillReceiveProps(nextProps: DaySelectorProps): void {
        this.setState({value: nextProps.value});
    }

    render() {
        return (
            <div className="day-selector">
                <PeriodSwitch period={this.state.value.format('MMMM YYYY')}
                              next={() => this.next()}
                              prev={() => this.prev()}
                              changeMode={() => this.props.changeMode()}/>
                <ul className="day-selector__days-of-week">
                    {daysOfWeek().map((item, index) => {
                        return (
                            <li className="day-selector__day-of-week" key={index}>
                                {item}
                            </li>
                        );
                    })}
                </ul>
                <ul className="day-selector__days-of-month">
                    {monthCalendar(this.state.value).map((day) =>
                        <li key={day.toISOString()}
                            className={this.addLiClass(day)}
                            onClick={() => this.props.selectValue(day)}>
                            {day.format("D")}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}