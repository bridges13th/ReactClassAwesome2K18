import * as React from 'react';

import { EditBlogTable } from './blog-component/EditBlogTable'
import { AddBlogForm } from './blog-component/AddBlogForm';

//import minion tools here

export class BlogTool extends React.Component {
    componentDidMount() {
        //add load all on init
        this.props.loadAllBlogs();
    }

    render() {
        return <React.Fragment>
            <div>Workflow 1: Add Entries!</div>
            <EditBlogTable
                entries={this.props.entries}
                onEditBlogEntry={this.props.onEditBlogEntry}
                onDeleteBlogEntry={this.props.onDeleteBlogEntry}
                onSaveBlog={this.props.onSaveBlog}
                loadAllBlogs={this.props.loadAllBlogs}
                blogEntryToEdit={this.props.blogEntryToEdit}
            />
            <AddBlogForm onSubmitBlog={this.props.addBlog} loadAllBlogs={this.props.loadAllBlogs} />
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