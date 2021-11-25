import React from "react";

export default function(){
    const date = new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let session = 'AM';
    if(hours > 12){
        session = 'PM';
    }

    if(hours < 10){
        hours = '0'+hours;
    }

    
    //리턴하기전에 let로 데이터 만들기
    // 표현식 결과값은 모두 동일 방법만 다를 뿐
    return(
        /*
            comment01 : 컴포넌트 안이 아니기 때문에 자바스크립트 구문이 가능하다.
        */
        <div /*comment02 : 여기서도 다중행 주석이 가능 -> 비추천  */ className='clock' title='시계' porp01=''>
            {
                /*
                JSX는 HTML이 아니다 <!-- --> 주석은 사용할 수 없다.
                */
            }
            //comment03 : JSX 안에서의 주석을 사용하면 그대로 나옴
            {('0'+(hours > 12 ? hours-12 : hours)).slice(-2)} 
            {' : '} 
            {/*이런 방식으로 표현식이 실행되는 블록안에서 주석을 달아야 한다  추쳔!!*/}
            {('0'+minutes).slice(-2)} 
            {' : '} 
            {seconds < 10 ? '0'+seconds:seconds} 
            {hours>12 ? 'PM' : 'AM'}
        </div>
    );
}