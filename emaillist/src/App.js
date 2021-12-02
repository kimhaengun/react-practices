import React, { useState } from 'react';
import './assets/scss/App.scss';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

import data from './assets/json/data.json';

export default function() {

    const [keyword,setKeyword] = useState('');
    const notifyKeywordChanged = (keyword) => {
        console.log(keyword);
        setKeyword(keyword);
    }

    return (
        <div className={'App'}>0
            <RegisterForm/>
            <Searchbar callback={notifyKeywordChanged}/>
            <Emaillist keyword={keyword} emails={data}/>
        </div>
    )
}