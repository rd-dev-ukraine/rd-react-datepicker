import * as React from 'react';
import { Moment } from 'moment';

import { DaySelector, MonthSelector, YearSelector, DecadeSelector } from './index';

export type DateSelectorMode = 'day' | 'month' | 'year' | 'decade';

export interface DateSelectorProps {
    value: Moment;
    change: (date: Moment) => void;
}

export interface DateSelectorState {
    currentMode?: DateSelectorMode;
    value?: Moment;
}

export class DateSelector extends React.Component<DateSelectorProps, DateSelectorState> {

    constructor(props) {
        super(props);

        this.state = {
            currentMode: 'day',
            value: this.props.value.clone()
        }
    }

    private changeMode(mode: DateSelectorMode): void {
        this.setState({currentMode: mode})
    }

    private changeDate(date: Moment, nextMode: DateSelectorMode): void {
        this.setState({
            currentMode: nextMode,
            value: date
        });
    }

    componentWillReceiveProps(nextProps: DateSelectorProps): void {
        this.setState({value: nextProps.value});
    }

    render() {
        return (
            <div className="date-selector">
                {
                    this.state.currentMode === 'day' &&
                    <DaySelector
                        value={this.state.value}
                        chosenDate={this.props.value.clone()}
                        selectValue={value => this.props.change(value.clone())}
                        changeMode={() => this.changeMode('month')}/>
                }
                {
                    this.state.currentMode === 'month' &&
                    <MonthSelector
                        value={this.state.value}
                        selectValue={value => this.changeDate(value, 'day')}
                        changeMode={() => this.changeMode('year')}/>
                }
                {
                    this.state.currentMode === 'year' &&
                    <YearSelector
                        value={this.state.value}
                        selectValue={value => this.changeDate(value, 'month')}
                        changeMode={() => this.changeMode('decade')}/>
                }
                {
                    this.state.currentMode === 'decade' &&
                    <DecadeSelector
                        value={this.state.value}
                        selectValue={value => this.changeDate(value, 'year')}/>
                }
            </div>
        )
    }
}