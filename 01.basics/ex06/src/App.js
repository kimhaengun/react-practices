import React from 'react';

const App = function(){

    // const app = React.createElement('h1', null, 'HW');
    // return app; 

    //rendering 한 친구를 리턴해줘야함
    //하나의 엘레먼트만 리턴할 수 있음 (전체를 div를 감싸면됨)
    
    const message = 'Hello World';
    return(
        //공백 --> 스트링이기 때문에 {+ '          '} or {+ `             `}
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export {App};