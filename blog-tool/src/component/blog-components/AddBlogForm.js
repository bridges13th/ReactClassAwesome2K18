import * as React from 'react';

export class AddBlogForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    //   id: 0,
      title: '',
      published: '',
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
    // var date = new Date();
    return <form>
      
      <h2>Add New Blog:</h2>
      <div>
        <input type="text" name="title" placeholder="Title"
         value={this.state.title} onChange={this.onChange} />
      </div>
      <div>
        <input type="text" name="published" placeholder="Date"
         value={this.state.published} onChange={this.onChange} />
      </div>
      <div>
        <input type="text" name="body" placeholder="Why are you angry this time?..."
          value={this.state.body} onChange={this.onChange} />
      </div>
      <button type="button" onClick={() => this.props.onSubmitBlog({...this.state}).then(() => this.props.loadAllBlogs())}>Submit</button>
    </form>
  }
}
