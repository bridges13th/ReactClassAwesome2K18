import * as React from 'react';
import { Entry } from './entry';

//import minion tools here

export class BlogTool extends React.Component {
    componentDidMount() {
        //add load all on init
        this.props.loadAllBlogs();
    }

    render() {
        console.log("BlogTool", this.props.entries);
        return <React.Fragment>
            <span>Workflow 1: Add Entries!</span>
            <div>Workflow 2: Display all entries!</div>
            <div>

                {(this.props.entries.length === 0) ? <div>"NOTHING!"</div> : 

                <Entry entry={this.props.entries[0]} changePreview={this.props.changePreview} />
                }
            </div>
        </React.Fragment>;
    }
};