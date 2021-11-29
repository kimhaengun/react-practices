import React from 'react';

export default function({name}) {
    return (
        <div className='TaskList'>
            <ul>
                <li class='TaskList__Task'>
                    <input type='checkbox' checked='true' />
                        {name}
                    <a href='#' class='TaskList__Task--remove'></a>
                </li>
            </ul>
        </div>        
    );
}