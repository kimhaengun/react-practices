import React, {Fragment} from 'react';
import header from './Header';
import content from './Content';

export default function(){

    return (
        // <Fragment>
        //     <header />
        //     <content />
        // </Fragment>
        React.createElement(Fragment,null,React.createElement(header,null), React.createElement(content,null))
        );
}