import * as React from 'react';
import { Moment } from 'moment';
import { OverlayContainer, Overlay, Alignment, AlignType } from 'rd-react-overlay';
import { DateInput, DatePickerPanel, DateInputProps } from '../datepicker';

interface DatePickerProps {
    showClearButton?: boolean;
    value: Moment;
    change: (newDate: Moment) => void;
}

interface DatePickerState {
    visible?: boolean;
    alignment?: Alignment;
}

export class DatePicker extends React.Component<DatePickerProps & DateInputProps, DatePickerState> {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            alignment: {
                target: {
                    horizontal: AlignType.Left,
                    vertical: AlignType.Bottom
                },
                overlay: {
                    horizontal: AlignType.Left,
                    vertical: AlignType.Top
                }
            }
        }
    }

    handleClick() {
        this.setState({visible: true})
    }

    render() {
        return (
            <OverlayContainer>
                <div className="datepicker-actions">
                    <DateInput
                        mode={this.props.mode}
                        format={this.props.format}
                        updateMode={this.props.updateMode}
                        onClick={() => this.handleClick()}
                        disabled={this.props.disabled}
                        value={this.props.value}
                        change={(newValue) => this.props.change(newValue)}/>
                    {
                        this.props.showClearButton &&
                        <button type="button"
                                className="datepicker-actions__button"
                                disabled={this.props.disabled}
                                onClick={() => this.props.change(null)}>
                            <span className="datepicker__buttonIcon datepicker__buttonIcon-close"></span>
                        </button>
                    }
                </div>
                <Overlay visible={this.state.visible}
                         onClickOutside={(clickedOnContainer) => this.setState({visible: clickedOnContainer})}
                         alignment={this.state.alignment}>
                    {
                        (left, top) =>
                            <div style={({position: 'absolute', top: top, left: left})}>
                                <DatePickerPanel
                                    value={this.props.value}
                                    mode={this.props.mode}
                                    change={(newDate) => this.props.change(newDate)}/>
                            </div>
                    }
                </Overlay>
            </OverlayContainer>
        )
    }
}