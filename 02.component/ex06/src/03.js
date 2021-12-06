import fs, { stat } from 'fs';

//data.json에 있는 오브젝트를 스트링으로 읽은 후 JOSN으로 파싱
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = Object.assign({}, state.order, {
    receive: '부산시 해운대구 우동'
});

updateOrder.payment.method = 'Mobile';

console.log(
    state.order, 
    updateOrder,
    state.order === updateOrder, //false
    state.order.receive === updateOrder.receive, //false
    state.order.payment === updateOrder.payment //true
);