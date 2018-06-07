import * as React from 'react';

import { EditBlogForm } from './EditBlogForm';
import { AddBlogForm } from './AddBlogForm';

//import minion tools here

export class BlogTool extends React.Component {
    componentDidMount() {
        //add load all on init
        this.props.loadAllBlogs();
    }

    render() {
        return <React.Fragment>
            <div>Workflow 1: Add Entries!</div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Published</th>
                        <th>Body</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.entries.map(entry => (entry.id !== this.props.blogEntryToEdit) 
                        ? <tr>
                            <td>{ entry.id }</td>
                            <td>{ entry.title }</td>
                            <td>{ entry.published }</td>
                            <td>{ entry.body }</td> 
                            <td>
                                <a onClick={() => this.props.onEditBlogEntry(entry.id)} >[edit]</a>
                                <a onClick={() => this.props.onDeleteBlogEntry(entry.id).then(this.props.loadAllBlogs)} >[delete]</a>
                            </td>
                        </tr> 
                        : <EditBlogForm entry={entry} onSaveBlog={this.props.onSaveBlog} loadAllBlogs={this.props.loadAllBlogs}/>
                    )}
                </tbody>
            </table>
            <AddBlogForm onSubmitBlog={this.props.addBlog} loadAllBlogs={this.props.loadAllBlogs}/>  
            <div>Workflow 2: Display all entries!</div>
            <div>
                <ul>
                    {this.props.entries.map(entry =>
                        <li key={entry.id}>
                            <div>Title: {entry.title}</div>
                            <div>Published: {entry.published} </div>
                            <div>Body: {entry.body}</div>
                        </li>
                    )}
                </ul>
            </div>
        </React.Fragment>;
    }
};