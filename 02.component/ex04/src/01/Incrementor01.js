import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            val: this.props.begin
        }
    }
    onClickButton(e){
                this.setState({
                val: this.state.val + this.state.step
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                <strong>+</strong>
                <button>
                <strong>-</strong>    
                </button>   
            </div>
        );
    }
}