import React from 'react';

export default function(){
    return (
        <div>
            <h2>App01 임</h2>
            <p>JSX Tutorials - 특징1 : HTML과 차이점</p>
            {
                /*
                    1. 속성은 Camel Case

                */
            }
            <input type='text' maxLength='10' />
            {
                /* 
                    2. Element는 꼭 닫혀야 한다.
                    자주 나오는 오류
                    <br>, <hr>, <input type='text'>, <img src=''> --> 마지막에 태그를 안닫아줌 (/)
                */    
            }
            <br/>
            <hr/>
            <img src='chrome://favicon2/?size=24&scale_factor=1x&show_fallback_monogram=&page_url=http%3A%2F%2Flocalhost%3A8080%2Fjblog03'/>
            {
                /* 
                    3. 속성 이름은 DOM API 기반이다.
                    <div id = 'box' class = 'box'> ....</div>
                    document.getElementById('box').className = 'box'
                */
            }
            <div id='box' className='box'>
                박스인데용
            </div>
        </div>
    )
}