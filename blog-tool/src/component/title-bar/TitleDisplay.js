import * as React from 'react';

export const TitleDisplay = props =>
    <header>        
        <h1>{props.title}
        <button onClick={() => props.editTitle()}>edit</button>
        </h1>
    </header>;
