import React, { Component } from 'react';
import Button from '../src/button.js';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    state = {
        loading: true
    }

    onClick() {
        alert('你点击了按钮');
        this.setState({
            loading: !this.state.loading
        });
    }

    render() {
        return (
            <div>
                <Button active onClick={this.onClick}>Active</Button>
                <Button disabled onClick={this.onClick}>Disabled Button</Button>
                <Button loading={this.state.loading} onClick={this.onClick}>Loading</Button>
                <hr/>
                <Button disabled href="https://github.com/react-salt">Disabled Link</Button>
            </div>
        );
    }
}
