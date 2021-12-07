import React, { useState,useEffect } from 'react';
import './assets/scss/App.scss';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

// import data from './assets/json/data.json';

export default function() {

    const [emails, setEmails] = useState([]); //처음은 빈 배열
    const [keyword,setKeyword] = useState('');
    const notifyKeywordChanged = (keyword) => {
        setKeyword(keyword);
    }

    useEffect( async()=>{ //에러대비 try
        try{
        const response =await fetch('http://localhost:8888/api',{
            method:'get',
            mode:'cors', //no-cors, cors, same-origin
            credentials:'same-origin', //include, omit, same-origin
            cache:'no-cache', //no-cache, reload, force-cache, default*
            headers:{
                'Content-Type': 'application/json', //cf.application/x-www-form-urlencoded
                'Accept': 'application/json' //cf.text/html
            },
            redirect: 'follow',     //follow, error, manual(response.url)
            referrer: 'client',   //no-referrer, *client
            body: null
        });
        //성공하면
        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
        }
        //결과를 json으로 변환
        const jsonResult = await response.json();
        console.log(jsonResult);

        //통신은 했지만 결과값이 success가 아니면 
        if(jsonResult.result !== 'success'){
            throw new Error(`${jsonResult.result} ${jsonResult.message}`);
        }

        // setEmails에 데이터 셋팅하기
        setEmails(jsonResult.data);
    } catch(err){
        console.log(err);

    }
    },[]);


    return (
        <div className={'App'}>
            <RegisterForm/>
            <Searchbar keyword={keyword} callback={notifyKeywordChanged}/>
            <Emaillist keyword={keyword} emails={emails}/>
        </div>
    )
}