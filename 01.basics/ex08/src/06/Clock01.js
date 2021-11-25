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
        <div>
            {hours} : {('0'+minutes).slice(-2)} : {seconds < 10 ? '0'+seconds:seconds} {session}
        </div>
    );
}