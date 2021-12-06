import fs, { stat } from 'fs';

//data.json에 있는 오브젝트를 스트링으로 읽은 후 JOSN으로 파싱
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder1 = state.order;
updateOrder1.receive = '뿌싼씨 해운대구 우똥 .... ';

//하면 안됨 --> 새로운 order를 생성하라!
// setState({
//     order: updateOrder1
// });

console.log(state.order, updateOrder1, state.order === updateOrder1);

console.log("-====================================-");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}
let updateOrder2 = Object.assign({}, state.order, {
    receive: '뿌싼씨 해운대구 우똥 .... '
});

console.log(state.order, updateOrder2, state.order === updateOrder2);

console.log("-====================================-");
