import * as React from 'react';
import { TitleDisplay } from './TitleDisplay'
import { TitleForm } from './TitleForm'

export const TitleTool = props =>
    <React.Fragment>
        {console.log('TitleTool:', props)}
        {props.editMode === false
            ? <TitleDisplay title={props.title} editTitle={props.editTitle} />
            : <TitleForm saveTitle={props.saveTitle} />
        }
    </React.Fragment>;
