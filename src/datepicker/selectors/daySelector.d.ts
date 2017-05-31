/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
export interface DaySelectorProps {
    value: Moment;
    chosenDate: Moment;
    selectValue: (value: Moment) => void;
    changeMode: () => void;
}
export interface DaySelectorState {
    value: Moment;
}
export declare class DaySelector extends React.Component<DaySelectorProps, DaySelectorState> {
    constructor(props: DaySelectorProps);
    componentWillReceiveProps(nextProps: DaySelectorProps): void;
    render(): React.ReactElement<DaySelectorProps>;
    private prev;
    private next;
}
