import React from 'react';
import GuestbookForm from './GuestbookForm';
import GuestbookView from './GuestbookView';
import './assets/css/styles.css';

export default function() {
    return (  
      <div className='Guestbook'>
          <h1>방명록</h1>
          <GuestbookForm />
          <GuestbookView/>
      </div>
    )
}