/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
export interface MonthSelectorProps {
    value: Moment;
    selectValue: (value: Moment) => void;
    changeMode: () => void;
}
export interface MonthSelectorState {
    value: Moment;
}
export declare class MonthSelector extends React.Component<MonthSelectorProps, MonthSelectorState> {
    constructor(props: MonthSelectorProps);
    componentWillReceiveProps(nextProps: MonthSelectorProps): void;
    render(): React.ReactElement<MonthSelectorProps>;
    private prev;
    private next;
    private monthes();
}
