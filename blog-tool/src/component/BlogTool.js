import * as React from 'react';

import { PreviewTool } from './blog-components/PreviewTool'
//import minion tools here

export class BlogTool extends React.Component {
    componentDidMount() {
        //add load all on init
        this.props.loadAllBlogs();
    }

    render() {
        return <React.Fragment>
            {console.log("BlogTool", this.props)}
            <span>Workflow 1: Add Entries!</span>
            <div>Workflow 2: Display all entries!</div>
            <PreviewTool
                entries={this.props.entries}
                page={this.props.page}
                nextPage={this.props.nextPage}
                prevPage={this.props.prevPage}
            />
        </React.Fragment>;
    }
};