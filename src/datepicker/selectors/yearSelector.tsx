import * as React from "react";
import * as cn from "classnames";
import { Moment } from "moment";

import { isSelected, decade, formatDecade } from "../dateUtils";

import { PeriodSwitch } from "./periodSwitch";


export interface YearSelectorProps {
    value: Moment;
    selectValue: (value: Moment) => void;
    changeMode: () => void;
}

export interface YearSelectorState {
    value: Moment;
}

export class YearSelector extends React.Component<YearSelectorProps, YearSelectorState> {

    constructor(props: YearSelectorProps) {
        super(props);

        this.state = {
            value: this.props.value
        };
    }

    public componentWillReceiveProps(nextProps: YearSelectorProps): void {
        this.setState({ value: nextProps.value });
    }

    public render(): React.ReactElement<YearSelectorProps> {
        return (
            <div className="date-set">
                <PeriodSwitch
                    period={formatDecade(this.state.value)}
                    next={this.next}
                    prev={this.prev}
                    changeMode={() => this.props.changeMode()}
                />
                <ul className="date-set__dates">
                    {
                        this.years().map(year =>
                            <li
                                key={year.toISOString()}
                                className={cn("date-set__date", { "selected": isSelected(this.state.value, year) })}
                                onClick={() => this.props.selectValue(year)}
                            >
                                {year.format("YYYY")}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }

    private prev = (): void => {
        this.setState(prevState => ({
            value: prevState.value.subtract(10, "year")
        }));
    }

    private next = (): void => {
        this.setState(prevState => ({
            value: prevState.value.add(10, "year")
        }));
    }

    private years(): Moment[] {
        const [start] = decade(this.state.value);
        const result: Moment[] = [];

        for (let year = 0; year < 10; year++) {
            result.push(start.clone().add(year, "year"));
        }

        return result;
    }
}