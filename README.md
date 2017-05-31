# rd-react-datepicker

Customizable DatePicker component for React.js.

## Installation

````shell
npm i rd-react-datepicker --save
````

## Code Example

#### [Demo](https://rd-dev-ukraine.github.io/rd-react-datepicker/)

#### [Code](https://github.com/rd-dev-ukraine/rd-react-datepicker/blob/master/src/app.tsx)

There is two ways how you can use this datepicker - with and without popup. 

##### With popup

Simply import `DatePicker` component and `local` function to your component. `local()` is a wrap for `moment()`.

```typescript
import { DatePicker, local } from 'rd-react-datepicker';
```

Add `value` state.

```typescript
this.state = {
    value: local()
}
```

And write component in the render. `change` prop is nescessary for changing the `value`. For popup settings look [here](https://github.com/rd-dev-ukraine/rd-react-overlay).

```html
<DatePicker
    value={this.state.value}
    change={(newDate) => this.setState({value: newDate})}/>
```

##### Without popup

Just import `DatePickerPanel`,`DateInput` and `local`.

```typescript
import { DatePickerPanel, DateInput, local } from 'rd-react-datepicker';
```

Add `value` state.

```typescript
this.state = {
    value: local()
}
```

And write `DatePickerPanel` and `DateInput` in the render. `change` prop is nescessary for changing the `value`.

```html
<DateInput
    value={this.state.value}
    change={(newDate) => this.setState({value: newDate})}/>
<DatePickerPanel
    value={this.state.value}
    change={(newDate) => this.setState({value: newDate})}/>
```

## API Reference

Properties for DateInput:

|Property         |Type    |Default                                                          |Description                                                                                               |
| :-------------- | :----- | :-------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
|`mode`           |string  |`date`                                                           |Changes view mode - date, datetime, time                                                                  |
|`disabled`       |boolean |`false`                                                          |Disables controls                                                                                         |
|`showClearButton`|boolean |`true`                                                           |Show or not clear input button                                                                            |
|`format`         |string  | `defaultFormat = {"date": "LL","datetime": "LLL","time": "LT"};`|Changes view format that provides [moment](http://momentjs.com/docs/#/displaying/ )                       |
|`updateMode`     |string  | `change`                                                        |`change` - change the date with 1 sec timeout. `blur` - change the date on input blur.                    |
|`onClick`        |function| `undefined`                                                     |Need for popup switching `visible` state. In `DatePicker` component it is `this.setState({visible: true})`|
|`value`          |Moment  |`undefined`                                                      |Datepicker value                                                                                          |
|`change`         |function|`undefined`                                                      |The function that changes state value                                                                     |

Properties for DatePickerPanel:

|Property|Type    |Default    |Description                             |
| :----- | :----- | :-------- | :------------------------------------- |
|`mode`  |string  |`date`     |Changes view mode - date, datetime, time|
|`value` |Moment  |`undefined`|Datepicker value                        |
|`change`|function|`undefined`|The function that changes state value   |

DatePicker compoze all props.

## License

This project is licensed under the MIT license. See the [LICENSE](https://github.com/rd-dev-ukraine/rd-react-datepicker/blob/master/LICENSE) file for more info.