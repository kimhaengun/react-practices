import fs, { stat } from 'fs';

//data.json에 있는 오브젝트를 스트링으로 읽은 후 JOSN으로 파싱
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

//json으로 파싱한 데이터 (order)에 products 값 추가 하기
const updateProducts1 = state.order.products;
updateProducts1.push({
    "no": "s002-002",
    "name": "블루 양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProducts1, state.order.products === updateProducts1);

console.log("=======================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}
//concatW
const updateProducts2 = state.order.products.concat({
    "no": "s002-002",
    "name": "블루 양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProducts2, state.order.products === updateProducts2);

console.log("=======================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}
// 스프레드
const updateProducts3 = ([...state.order.products, {
    "no": "s002-002",
    "name": "블루 양말",
    "price": 2000,
    "amount": 1
}]);

console.log(state.order.products, updateProducts3, state.order.products === updateProducts3);

console.log("=======================================");


