import React from "react";

export default function(){
    const date = new Date();
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    //리턴하기전에 let로 데이터 만들기
    // 표현식 결과값은 모두 동일 방법만 다를 뿐
    return(
        <div>
            {('0'+(hours > 12 ? hours-12 : hours)).slice(-2)} 
            : 
            {('0'+minutes).slice(-2)} 
            {' : '} 
            {seconds < 10 ? '0'+seconds:seconds} 
            {hours>12 ? 'PM' : 'AM'}
        </div>
    );
}