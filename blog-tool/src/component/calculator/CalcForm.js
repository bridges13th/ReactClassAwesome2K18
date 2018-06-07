import * as React from 'react'

export class CalcForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };
    }

    onChange = e => {
        this.setState({
            [e.target.name]: Number(e.target.value),
        });
    }

    render() {
        return <React.Fragment>
            <form>
                <div><label>Input: </label>
                    <input type="number"
                        id="value-input"
                        name="value"
                        value={this.state.value}
                        onChange={this.onChange} />
                </div>
                <div>
                    <button type="button" onClick={() => this.props.add(this.state.value)}>+</button>
                    <button type="button" onClick={() => this.props.sub(this.state.value)}>-</button>
                    <button type="button" onClick={() => this.props.mul(this.state.value)}>*</button>
                    <button type="button" onClick={() => this.props.div(this.state.value)}>/</button>
                </div>
                <div>
                    <label>Result: {this.props.result}</label>
                </div>
            </form>
        </React.Fragment>
    }
}

