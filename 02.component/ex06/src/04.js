import fs, { stat } from 'fs';
import update from 'react-addons-update';

//data.json에 있는 오브젝트를 스트링으로 읽은 후 JOSN으로 파싱
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = update(state.order,{
    //해당 패스의 값 변경 1
    receive:{
        $set: '부산시 해운대구 우동'
    },
    //해당 패스의 값 변경 2
    payment:{
        method:{
            $set:'Mobile'
        }
    },
    products:{
        //배열 요소 변경(인덱스로 찾아서)
        0:{
            amount:{
                $set: 5
            }
        },
        //배열 요소 새로 추가
        $push: [{
            "no": "s002-002",
            "name": "블루 양말",
            "price": 2000,
            "amount": 1 
        }]
    }
});

console.log(
    state.order, 
    updateOrder,
    state.order === updateOrder, //false
    state.order.receive === updateOrder.receive, //false
    state.order.payment === updateOrder.payment,
    state.order.products === updateOrder.products
);