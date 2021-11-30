import React, { useState } from 'react';

export default function TitelBar02() {

    const onClickHandler=() => {
        //값만 변화 (UI 변동 x)
        // this.no++;
        
        //상태변화
        // this.setState({
        //     no:this.state.no+1
        // });
        console.log('TitleBar02 click');
    }
    return (
        <h1 
            onClick={onClickHandler}
            style={{cursor:'pointer'}}>
            ex03 - functional Event hanler(Functional Component)
        </h1>
    )
}