/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
export interface MinuteSelectorProps {
    value: Moment;
    selectValue: (date: Moment) => void;
}
export declare class MinuteSelector extends React.Component<MinuteSelectorProps, void> {
    render(): React.ReactElement<MinuteSelectorProps>;
    private minutes();
}
