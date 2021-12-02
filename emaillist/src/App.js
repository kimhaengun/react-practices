import React from 'react';
import './assets/scss/App.scss';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

import data from './assets/json/data.json';

export default function() {
    return (
        <div className={'App'}>
            <RegisterForm/>
            <Searchbar/>
            <Emaillist emails={data}/>
        </div>
    )
}