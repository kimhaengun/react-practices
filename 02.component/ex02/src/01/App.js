import React from 'react';

export default function() {
  const h1Style={
    width:180,
    height:60,
    color: 'red',
    backgroundColor:'#eeff99'
  }
  
  return (
        <div id='App'>
          <h1 style={h1Style}>Inline</h1>
        </div>
    )
}