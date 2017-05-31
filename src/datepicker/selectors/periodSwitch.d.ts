/// <reference types="react" />
import * as React from "react";
export interface PeriodSwitchProps {
    period: string;
    next: () => void;
    prev: () => void;
    changeMode: () => void;
}
export declare const PeriodSwitch: (props: PeriodSwitchProps) => React.ReactElement<PeriodSwitchProps>;
