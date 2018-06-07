import * as React from 'react';

import { EditBlogForm } from './EditBlogForm';

//import minion tools here

export class EditBlogTable extends React.Component {
    render() {
        return <React.Fragment>
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
                            <td>{entry.id}</td>
                            <td>{entry.title}</td>
                            <td>{entry.published}</td>
                            <td>{entry.body}</td>
                            <td>
                                <a onClick={() => this.props.onEditBlogEntry(entry.id)} >[edit]</a>
                                <a onClick={() => this.props.onDeleteBlogEntry(entry.id).then(this.props.loadAllBlogs)} >[delete]</a>
                            </td>
                        </tr>
                        : <EditBlogForm entry={entry} onSaveBlog={this.props.onSaveBlog} loadAllBlogs={this.props.loadAllBlogs} />
                    )}
                </tbody>
            </table>
        </React.Fragment>;
    }
};