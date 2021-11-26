import React,{Component} from "react";
import ListItem from './ListItem';

export default class FoodList extends Component{
    render(){
        return(
        <ul>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </ul>
        )
    }
}