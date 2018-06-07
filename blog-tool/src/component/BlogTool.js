import * as React from 'react';

//import minion tools here

export class BlogTool extends React.Component {
    componentDidMount() {
        //add load all on init
        this.props.loadAllBlogs();
    }

    render() {
        return <React.Fragment>
            <span>Workflow 1: Add Entries!</span>
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