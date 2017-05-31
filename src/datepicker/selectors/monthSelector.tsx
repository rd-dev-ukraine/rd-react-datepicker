import * as React from "react";
import * as cn from "classnames";
import { Moment } from "moment";

import { isSelected } from "../dateUtils";

import { PeriodSwitch } from "./periodSwitch";


export interface MonthSelectorProps {
    value: Moment;
    selectValue: (value: Moment) => void;
    changeMode: () => void;
}

export interface MonthSelectorState {
    value: Moment;
}

export class MonthSelector extends React.Component<MonthSelectorProps, MonthSelectorState> {

    constructor(props: MonthSelectorProps) {
        super(props);

        this.state = {
            value: this.props.value
        };
    }

    public componentWillReceiveProps(nextProps: MonthSelectorProps): void {
        this.setState({ value: nextProps.value });
    }

    public render(): React.ReactElement<MonthSelectorProps> {
        return (
            <div className="date-set">
                <PeriodSwitch
                    period={this.state.value.format("YYYY")}
                    next={this.next}
                    prev={this.prev}
                    changeMode={() => this.props.changeMode()}
                />
                <ul className="date-set__dates">
                    {
                        this.monthes().map(month =>
                            <li
                                key={month.toISOString()}
                                className={cn("date-set__date", { "selected": isSelected(this.state.value, month) })}
                                onClick={() => this.props.selectValue(month)}
                            >
                                {month.format("MMMM")}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }

    private prev = (): void => {
        this.setState(prevState => ({
            value: prevState.value.subtract(1, "year")
        }));
    }

    private next = (): void => {
        this.setState(prevState => ({
            value: prevState.value.add(1, "year")
        }));
    }

    private monthes(): Moment[] {
        const result: Moment[] = [];

        for (let monthNum = 0; monthNum < 12; monthNum++) {
            let date = this.state.value.clone();
            result.push(date.month(monthNum));
        }

        return result;
    }
}