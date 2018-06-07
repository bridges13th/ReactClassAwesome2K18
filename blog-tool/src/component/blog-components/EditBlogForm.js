import * as React from 'react'

export class EditBlogForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.entry.id,
            title: this.props.entry.title,
            published: this.props.entry.published,
            body: this.props.entry.body,
        }
    }

    onChange = e => {
        this.setState({
          [ e.target.name ]: e.target.type === 'number'
            ? Number(e.target.value) : e.target.value
        });
    }

    render () {
        return <tr>
            <td>{this.props.entry.id}</td>
            <td> 
                <input type="text" name="title"
                value={this.state.title} onChange={this.onChange} />
            </td>
            <td> 
                <input type="text" name="published"
                value={this.state.published} onChange={this.onChange} />
            </td>
            <td> 
                <input type="text" name="body"
                value={this.state.body} onChange={this.onChange} />
            </td>
            <td> 
                <button onClick={() => this.props.onSaveBlog({...this.state}).then(() => this.props.loadAllBlogs()) }>save</button>
            </td>
        </tr>; 
    }
}
