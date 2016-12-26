import * as React from 'react';

export interface PeriodSwitchProps {
    period: string;
    next: () => void;
    prev: () => void;
    changeMode: () => void;
}

export class PeriodSwitch extends React.Component<PeriodSwitchProps, void> {

    render() {
        return (
            <div className="period-switch">
                <span className="period-switch__change datepicker__buttonIcon datepicker__buttonIcon-arrow-left"
                      onClick={() => this.props.prev()}></span>
                <span className="period-switch__period"
                      onClick={() => this.props.changeMode()}>{this.props.period}</span>
                <span className="period-switch__change datepicker__buttonIcon datepicker__buttonIcon-arrow-right"
                      onClick={() => this.props.next()}></span>
            </div>
        )
    }
}