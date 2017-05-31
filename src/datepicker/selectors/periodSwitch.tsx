import * as React from "react";
import * as cn from "classnames";


export interface PeriodSwitchProps {
    period: string;
    next: () => void;
    prev: () => void;
    changeMode: () => void;
}

export const PeriodSwitch = (props: PeriodSwitchProps): React.ReactElement<PeriodSwitchProps> => (
    <div className="period-switch">
        <span
            onClick={() => props.prev()}
            className={cn([
                "period-switch__change",
                "datepicker__buttonIcon",
                "datepicker__buttonIcon-arrow-left"
            ])}
        />
        <span
            onClick={() => props.changeMode()}
            className="period-switch__period"
        >
            {props.period}
        </span>
        <span
            onClick={() => props.next()}
            className={cn([
                "period-switch__change",
                "datepicker__buttonIcon",
                "datepicker__buttonIcon-arrow-right"
            ])}
        />
    </div>);
