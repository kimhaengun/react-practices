import React from 'react';

const App = function(){
    // const app = document.createElement('h1');
    // app.textContent = 'Welcome to React';
    const app = React.createElement('h1', null, 'HW');
    return app; //DOM app를 만들어서 리턴해줌
}

export {App};