import * as React from 'react';

import { EditBlogTable } from './blog-components/EditBlogTable'
import { AddBlogForm } from './blog-components/AddBlogForm';
import { Entry } from './blog-components/Entry';
import { PreviewTool } from './blog-components/PreviewTool'

import { PREVIEW_MODE, BLOG_VIEW_MODE, ADMIN_MODE } from '../reducers/blog-reducer'
//import minion tools here

export class BlogTool extends React.Component {
    componentDidMount() {
        //add load all on init
        this.props.loadAllBlogs();
    }

    render() {
        console.log("BlogTool", this.props.entries);
        return <React.Fragment>

            {console.log("BlogTool", this.props)}
            <h1>Blog-Anon </h1>
            {(this.props.mode === ADMIN_MODE) ?

                <a onClick={() => { return this.props.changePreview() }}>
                    [View Blog]
                </a>
                : <a onClick={() => { return this.props.changeAdmin() }}>
                    [Admin Blog]
            </a>
            }

            {this.props.mode === PREVIEW_MODE ?
                <PreviewTool
                    entries={this.props.entries}
                    page={this.props.page}
                    nextPage={this.props.nextPage}
                    prevPage={this.props.prevPage}
                    changeBlogView={this.props.changeBlogView}
                /> : null
            }
            {this.props.mode === BLOG_VIEW_MODE ?
                <Entry

                    entry={this.props.entries.find(entry => entry.id == this.props.id)}

                    changePreview={this.props.changePreview}
                /> : null
            }
            {this.props.mode === ADMIN_MODE ?
                <React.Fragment>
                    <EditBlogTable
                        entries={this.props.entries}
                        onEditBlogEntry={this.props.onEditBlogEntry}
                        onDeleteBlogEntry={this.props.onDeleteBlogEntry}
                        onSaveBlog={this.props.onSaveBlog}
                        loadAllBlogs={this.props.loadAllBlogs}
                        blogEntryToEdit={this.props.blogEntryToEdit}
                    />
                    <AddBlogForm onSubmitBlog={this.props.addBlog} loadAllBlogs={this.props.loadAllBlogs} />
                </React.Fragment>
                : null
            }
        </React.Fragment>;
    }
};