import React from 'react';
import ListItem from './ListItem';

export default function Foodlist({foods}) {
        return (
            <ul>
                { foods.map((food) => <ListItem 
                                        //key 값은 Item을 구분하기위해서 사용한다 = no값
                                        key={food.no}
                                        name={food.name} 
                                        quantity={food.quantity} />) }   
            </ul>
        )
}