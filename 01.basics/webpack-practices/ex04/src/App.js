import './assets/css/App.css';

const App = function(){
    const app = document.createElement('h1');
    //css 사용방법
    app.className = 'Header';
    app.textContent = 'Welcome to React';
    return app; //DOM app를 만들어서 리턴해줌
}

export {App};