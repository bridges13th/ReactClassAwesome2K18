import * as React from 'react';

const previewBody = (bodyText) => {
    if (bodyText.length <= 300) {
        return bodyText;
    }
    else {
        return bodyText.substring(0,400) + "...";
    }
}


export const PreviewEntry = props => <ul>
    {props.entries.slice((props.page * 5), ((props.page + 1) * 5)).map(entry =>
        <li key={entry.id}><h3>{entry.title}</h3>
            <div className="blog-preview">{previewBody(entry.body)}</div>
            <div className="date-preview">{entry.published}</div>
        </li>
    )}
</ul>;
