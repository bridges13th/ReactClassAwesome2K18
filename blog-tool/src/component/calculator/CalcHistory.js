import * as React from 'react';

export const CalcHistory = props => {
    return <ul>
        {props.actions.map(action =>
            <li key={action.id}>{action.type} {action.value} <button type="button" onClick={() => props.del(action.id)}>DEL</button></li>
        )}
    </ul>
};
