import * as React from "react";
import * as cn from "classnames";
import { Moment } from "moment";

import { isDecadeSelected, formatCentury, formatDecade } from "../dateUtils";

import { PeriodSwitch } from "./periodSwitch";


export interface DecadeSelectorProps {
    value: Moment;
    selectValue: (value: Moment) => void;
}

export interface DecadeSelectorState {
    value: Moment;
}

export class DecadeSelector extends React.Component<DecadeSelectorProps, DecadeSelectorState> {

    constructor(props: DecadeSelectorProps) {
        super(props);

        this.state = {
            value: this.props.value
        };
    }

    public componentWillReceiveProps(nextProps: DecadeSelectorProps): void {
        this.setState({ value: nextProps.value });
    }

    public render(): React.ReactElement<DecadeSelectorProps> {
        return (
            <div className="date-set">
                <PeriodSwitch
                    period={formatCentury(this.state.value)}
                    next={this.next}
                    prev={this.prev}
                    changeMode={() => false}
                />
                <ul className="date-set__dates">
                    {
                        this.decades().map(decade =>
                            <li
                                key={decade.toISOString()}
                                className={cn("date-set__date", {
                                    "selected": isDecadeSelected(this.state.value, decade)
                                })}
                                onClick={() => this.props.selectValue(decade)}
                            >
                                {formatDecade(decade)}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }

    private prev = (): void => {
        this.setState(prevState => ({
            value: prevState.value.subtract(100, "year")
        }));
    }

    private next = (): void => {
        this.setState(prevState => ({
            value: prevState.value.add(100, "year")
        }));
    }

    private decades(): Moment[] {
        const startYear = this.state.value.year() - this.state.value.year() % 100;
        const start = this.state.value.clone().year(startYear);
        const result: Moment[] = [];

        for (let year = 0; year < 100; year = year + 10) {
            result.push(start.clone().add(year, "year"));
        }

        return result;
    }
}