import * as React from 'react';

export class TitleForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            event: '',
        };
    }

    onChange = ({ target: { name, value, type } }) => {
        this.setState({ [name]: type === 'number' ? Number(value) : value });
    }


    render() {
        return <header>
        <h1>
        <input type="text" name="event"
                    value={this.state.name} onChange={this.onChange} />        
        <button onClick={() => this.props.saveTitle(this.state.event)}>save</button>
        </h1>
    </header>;
    }
}