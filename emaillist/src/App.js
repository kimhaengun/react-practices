import React from 'react';
import './assets/scss/App.scss';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

export default function() {
    return (
        <div className={'App'}>
            <RegisterForm/>
            <Searchbar/>
            <Emaillist/>
        </div>
    )
}