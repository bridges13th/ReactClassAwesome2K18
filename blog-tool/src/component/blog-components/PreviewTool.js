import * as React from 'react';

import { PreviewEntry } from './PreviewEntry'

export const PreviewTool = props => <React.Fragment>
    {console.log("PreviewTool", props.page)}
    <PreviewEntry
        entries={props.entries}
        page={props.page}
        changeBlogView={props.changeBlogView}
    />
    <div>Current Page: {props.page}
        <button type="button" onClick={() => props.prevPage(props.page)}>Previous</button>
        <button type="button" onClick={() => props.nextPage(props.page)}>Next</button>
    </div>
</React.Fragment>;