import * as React from 'react';

export class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      published: new Date().toLocaleDateString(),
      body: '',
    };
  } 

  onChange = e => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value
    });
  }


  render() {
    return <form>
      
      <h3>New Comment:</h3>
      <div>
        <input type="text" name="date" placeholder="Date"
          value={this.state.published} onChange={this.onChange}/> 
      </div>
      <div>
        <input type="text" name="body" placeholder="Troll away..."
          value={this.state.body} onChange={this.onChange} />
      </div>
      <button type="button" onClick={() => this.props.onSubmitComment({...this.state})}>Submit</button>
    </form>
  }
}
