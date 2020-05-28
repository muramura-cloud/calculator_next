import React, { Component } from 'react';

class Foouter extends Component {
    render() {
        return (
            <footer>
                <p>{this.props.footer}</p>
            </footer>
        );
    }
}

export default Foouter;
