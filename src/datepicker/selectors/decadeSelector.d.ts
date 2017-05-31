/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
export interface DecadeSelectorProps {
    value: Moment;
    selectValue: (value: Moment) => void;
}
export interface DecadeSelectorState {
    value: Moment;
}
export declare class DecadeSelector extends React.Component<DecadeSelectorProps, DecadeSelectorState> {
    constructor(props: DecadeSelectorProps);
    componentWillReceiveProps(nextProps: DecadeSelectorProps): void;
    render(): React.ReactElement<DecadeSelectorProps>;
    private prev;
    private next;
    private decades();
}
