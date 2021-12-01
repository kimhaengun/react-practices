import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            val: this.props.begin
        }
    }

    onClickPlusButton(e) {
        // this.state.value = this.state.value + this.props.step;
        this.setState({
            val: this.state.val + this.props.step
        })
    }

    onClickMinButton(e){
        this.setState({
            val: this.state.val-this.props.step
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickPlusButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}
                <button onClick={this.onClickMinButton.bind(this)}>
                    <strong>-</strong>
                </button>                    
            </div>
        );
    }
}