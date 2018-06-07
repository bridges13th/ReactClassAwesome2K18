import * as React from 'react';

import { PreviewEntry } from './PreviewEntry'

export const PreviewTool = props => <React.Fragment>
    {console.log("PreviewTool", props.page)}
    <PreviewEntry entries={props.entries} page={props.page} />
    {/* <ul>
        {props.entries.map(entry =>
            <li key={entry.id}>
                <div>Title: {entry.title}</div>
                <div>Published: {entry.published} </div>
                <div>Body: {entry.body}</div>
            </li>
        )}
    </ul> */}
    <div>Current Page: {props.page}
        <button type="button" onClick={() => props.prevPage(props.page)}>Previous</button>
        <button type="button" onClick={() => props.nextPage(props.page)}>Next</button>
    </div>
</React.Fragment>;