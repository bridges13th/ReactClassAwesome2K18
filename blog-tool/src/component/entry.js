import * as React from 'react';

//import minion tools here

export class Entry extends React.Component {
    componentDidMount() {
        //add load all on init
        // this.props.loadAllBlogs();
    }

    render() {
        console.log("Entry", this.props.entry);
        return <React.Fragment>
            <div>
                <h1>{this.props.entry.title}</h1>
                <h2>{this.props.entry.published}</h2>
                <p>{this.props.entry.body}</p>
                <button type="button">Edit</button>   <button type="button" onclick="{() => this.props.changePreview()}">Back To Posts</button>             
            </div>
        </React.Fragment>;
    }
};