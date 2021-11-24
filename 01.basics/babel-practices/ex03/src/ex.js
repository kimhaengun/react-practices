// 블록 스코프 변수(ES6)
const users = [{
    no: 1,
    name: '머이쿨',
    email: 'ah@ah.com'
},{
    no: 2,
    name: '똘리',
    email: 'ree@ah.com'
}];

// 객체분해(ES6)
function print({no, name, email }){
    //템플릿 문자열(es6)
    console.log(`${no}, ${name}, ${email}`);
}

// for..of(es6)
for(let user of users){
    print(user);
} 