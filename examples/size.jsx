import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/button.js';

export default class Example extends Component {
    render() {
        return (
            <div>
                <Button mySize="large">Large</Button>
                <Button>Medium</Button>
                <Button mySize="small">Small</Button>
                <Button mySize="xsmall">Xsmall</Button>

                <hr />

                <Button block>Block</Button>
            </div>
        );
    }
}
