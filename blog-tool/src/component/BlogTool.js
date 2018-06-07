import * as React from 'react';

import { Entry } from './blog-components/Entry';
import { PreviewTool } from './blog-components/PreviewTool'

import { PREVIEW_MODE, BLOG_VIEW_MODE } from '../reducers/blog-reducer'
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
            <span>Workflow 1: Add Entries!</span>
            <div>Workflow 2: Display all entries!</div>
            {this.props.mode === PREVIEW_MODE ?
                <PreviewTool
                    entries={this.props.entries}
                    page={this.props.page}
                    nextPage={this.props.nextPage}
                    prevPage={this.props.prevPage}
                    changeBlogView={this.props.changeBlogView}
                />
                : <Entry
                                        
                    entry={this.props.entries.find(entry => entry.id == this.props.id)}

                    changePreview={this.props.changePreview}
                />
            }
        </React.Fragment>;
    }
};