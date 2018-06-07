import * as React from 'react';

export const GiftList = props => <ul>    
    {props.gifts.map(gift =>
        <li key={gift.id}>
        <button type="button" onClick={() => props.deleteGift(gift.id)}>Got it!</button>
        {gift.name}: <span className={props.currency + '-currency'}>{gift.price}</span>
        </li>
    )}
</ul>;
