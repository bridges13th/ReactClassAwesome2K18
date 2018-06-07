import * as React from 'react';

//import minion tools here

export const CommentView = props => {

    console.log("CommentView", props.comment);
    return <React.Fragment>
            <h3>{props.comment.published}</h3>
            <p>{props.comment.body}</p>
    </React.Fragment>;
};