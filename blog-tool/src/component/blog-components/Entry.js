import * as React from 'react';

//import minion tools here
import { CommentView } from './CommentView'

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
                {this.props.entry.comments === undefined ?
                <span>Be the first to comment!</span>
                : <ul className="comment-block">
                    {this.props.entry.comments.map(comment =>
                        <li key={comment.id}>
                            <CommentView comment={comment} />
                        </li>
                    )}
                </ul>
                }
                <div><button
                    type="button"
                    onClick={() => {
                        return this.props.changePreview()
                    }}>
                    Back To Posts
                </button>
                </div>
            </div>
        </React.Fragment>;
    }
};