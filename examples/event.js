import React, { Component } from 'react';
import Button from '../src/button.js';

/*
*   Button组件可以通过onClick方法直接绑定点击事件
*/
export default class Example extends Component {
    Cn() {
        alert('你点击了按钮');
    }

    render() {
        return (
            <div>
                <Button onClick={this::this.Cn}>
                    Click
                </Button>
            </div>
        );
    }
}
