import React, { Fragment } from "react";
import {PropTypes} from 'prop-types';

export default function MyComponent({props01, props02, props03,props04,props05,props06}){
    return(
        <Fragment>
            <h2>Property Validation</h2>
            <span>props01:{props01 ? props01 : '---없어---'}</span>
              <br/>

              <span>props02:{props02 ? props02 : '---없어---'}</span>
              <br/>

              <span>props03:{props03 ? `${props03}` : '---없어---'}</span>
              <br/>

              <span>props04:{props04 ? props04.no : '---오브젝트 없어---'}</span>
              <br/>

              <span>props05:{props05 ? props05.map((e,i)=><b key={i}>{e}</b>) : '---배열 없어---'}</span>
              <br/>

              <span>props06:{props06 ? props06() : '---함수 없어---'}</span>
              <br/>
        </Fragment>
    );
}

MyComponent.prototype={
    //Built-In PropTypes Validator(primitive)
    props01 : PropTypes.string,
    props02 : PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,
}

//default value
MyComponent.defualtProps={
    props01 : '기본값',
    props02: 10,
    props03: false,
    props04: {},
    props05: [],
    props06: ()=>{} //더미(dummy) 함수 (깡통)
}