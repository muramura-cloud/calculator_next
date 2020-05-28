import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    style = {
        fontSize: "12pt",
        padding: "5px 15px",
    }

    constructor(props) {
        super(props);
        this.doAction = this.doAction.bind(this);
        this.doReset = this.doReset.bind(this);
    }

    doAction(e) {
        if (e.shiftKey) {
            return this.props.dispatch({ type: 'DECREMENT' });
        } else {
            return this.props.dispatch({ type: 'INCREMENT' });
        }
    }
    doReset(e) {
        return this.props.dispatch({ type: 'RESET' });
    }

    render() {
        return (
            <div>
                <p style={this.style}>{this.props.message}:{this.props.count}</p>
                <button style={this.style} onClick={this.doAction}>click</button>
                <button style={this.style} onClick={this.doReset}>reset</button>
            </div>
        );
    }
}

Counter = connect((state) => state)(Counter);
export default Counter;