/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
export interface HourSelectorProps {
    value: Moment;
    selectValue: (date: Moment) => void;
}
export declare class HourSelector extends React.Component<HourSelectorProps, void> {
    render(): JSX.Element;
    private hours();
    private isCurrentHour;
}
