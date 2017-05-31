/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
export interface YearSelectorProps {
    value: Moment;
    selectValue: (value: Moment) => void;
    changeMode: () => void;
}
export interface YearSelectorState {
    value: Moment;
}
export declare class YearSelector extends React.Component<YearSelectorProps, YearSelectorState> {
    constructor(props: YearSelectorProps);
    componentWillReceiveProps(nextProps: YearSelectorProps): void;
    render(): React.ReactElement<YearSelectorProps>;
    private prev;
    private next;
    private years();
}
