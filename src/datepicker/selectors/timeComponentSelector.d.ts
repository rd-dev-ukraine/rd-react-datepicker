/// <reference types="react" />
import * as React from "react";
import { Moment } from "moment";
export interface TimeComponentSelectorProps {
    value: Moment;
    selectHour: () => void;
    selectMinute: () => void;
    changeTime: (newTime: Moment) => void;
}
export declare class TimeComponentSelector extends React.Component<TimeComponentSelectorProps, void> {
    render(): React.ReactElement<TimeComponentSelectorProps>;
    private plusHour;
    private minusHour;
    private plusMinute;
    private minusMinute;
    private togglePmAm;
}
