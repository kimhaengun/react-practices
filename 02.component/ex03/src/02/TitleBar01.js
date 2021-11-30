import React, {Component} from 'react';

export default class TitelBar01 extends Component {

    constructor(){
        super(...arguments);
        this.no=0;
        this.state={
            no:0
        }
    }

    onClickHandler() {
        //값만 변화 (UI 변동 x)
        // this.no++;

        //상태변화
        this.setState({
            no:this.state.no+1
        });
        console.log('TitleBar01 click');
    }

    render() {
        return (
            <h1
                onClick={this.onClickHandler.bind(this)} 
                style={{cursor:'pointer'}}>
                ex03 - functional Event hanler(Functional Component)
                {
                    // `no: ${this.no}, state.no: 
                    this.state.no
                }
            </h1>
        )
    }
}