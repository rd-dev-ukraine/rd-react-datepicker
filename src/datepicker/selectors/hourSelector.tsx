import * as React from "react";
import * as cn from "classnames";
import { Moment } from "moment";


export interface HourSelectorProps {
    value: Moment;
    selectValue: (date: Moment) => void;
}

export class HourSelector extends React.Component<HourSelectorProps, void> {

    public render() {
        return (
            <div className="date-set">
                <ul className="date-set__dates">
                    {
                        this.hours().map(hour =>
                            <li
                                key={hour.toISOString()}
                                className={cn("date-set__date", { "selected": this.isCurrentHour(hour) })}
                                onClick={() => this.props.selectValue(hour)}
                            >
                                {hour.format("hh")}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }

    private hours(): Moment[] {
        const value: Moment = this.props.value.clone();
        const result: Moment[] = [];

        value.hour(value.hour() < 12 ? 0 : 12);

        for (let i = 1; i < 13; i++) {
            result.push(value.clone().add(i, "hour"));
        }

        return result;
    }

    private isCurrentHour = (value: Moment): boolean =>
        value
        && this.props.value
        && this.props.value.hour() === value.hour()
}