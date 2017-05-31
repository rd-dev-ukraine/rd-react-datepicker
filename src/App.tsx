import * as React from "react";
import { Moment } from "moment";

import { DatePicker, local } from "./datepicker";


interface AppState {
    value: Moment;
}

export default class App extends React.Component<{}, AppState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            value: local()
        };
    }

    public render(): React.ReactElement<{}> {
        return (
            <DatePicker
                value={this.state.value}
                disabled={false}
                showClearButton={true}
                change={(newDate: Moment) => this.setState({ value: newDate })}
            />
        );
    }
}