import * as React from 'react';
import { Moment } from 'moment';
import { DatePicker, local } from './datepicker';

interface AppState {
    value: Moment;
}

export class App extends React.Component<void, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            value: local()
        }
    }

    render() {
        return (
            <DatePicker
                value={this.state.value}
                disabled={false}
                showClearButton={true}
                change={(newDate) => this.setState({value: newDate})}/>
        )
    }
}