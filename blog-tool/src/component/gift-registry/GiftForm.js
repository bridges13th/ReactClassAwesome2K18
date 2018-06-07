import * as React from 'react';

export class GiftForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
        };
    }

    onChange = ({ target: { name, value, type } }) => {
        this.setState({ [name]: type === 'number' ? Number(value) : value });
    }


    render() {
        return <form>
            <div>
                <label>Name</label>
                <input type="text" name="name"
                    value={this.state.name} onChange={this.onChange} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" name="price"
                    value={this.state.price} onChange={this.onChange} />
            </div>
            <button type="button"
                onClick={
                    () => this.props.addGift({...this.state})
                    }>
                Add Gift</button>
        </form>;
    }


}