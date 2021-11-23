import './assets/scss/App.scss';
import logo from './assets/images/logo.svg';

const App = function(){
    const app = document.createElement('div');
    //css 사용방법
    app.className = 'App';
    app.innerHTML = 
    `<header class='App-header'>
        <img src='${logo}' class='App-logo' />
        <p>Hello World</p>
    </header>`;
    return app; //DOM app를 만들어서 리턴해줌
}

export {App};