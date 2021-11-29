import React from 'react';
import GuestbookViewList from './GuestbookViewList';
import './assets/css/styles.css';

export default function() {
    return (
    <div className='Guestbook__List'>
    <ul class="Guestbook__List">
        <GuestbookViewList />
    </ul>
    </div>
    )
}