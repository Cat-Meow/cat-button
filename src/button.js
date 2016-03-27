import React, { Component } from 'react';
import { setClass } from 'rs-util';

const SIZES = {
    'large': 'lg',
    'medium': '',
    'small': 'sm',
    'xsmall': 'xs'
};

class Button extends Component {
    static propTypes = {
        myStyle: React.PropTypes.oneOf([
            'default',
            'primary',
            'success',
            'danger',
            'info',
            'warning',
            'link'
        ]),
        mySize: React.PropTypes.oneOf([
            'large',
            'medium',
            'small',
            'xsmall'
        ]),
        className: React.PropTypes.string,  //自定义组件类名
        block: React.PropTypes.bool,    //块级风格
        componentClass: React.PropTypes.string,     //自定义标签类型
        active: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        loading: React.PropTypes.bool
    }

    static defaultProps = {
        myStyle: 'default',
        mySize: 'medium',
        className: '',
        block: false,
        active: false,
        disabled: false,
        loading: false
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // render链接
    renderLink(classNames) {
        let Node = this.props.componentClass || 'a',
            { href, target } = this.props;

        return (
            <Node {...this.props } href={href ? href : '#'} target={target ? target : '_blank'} className={classNames}>
                {this.props.children}
            </Node>
        );
    }

    handleClick(event) {
        this.props.onClick && this.props.onClick(event);
    }

    // render按钮
    renderButton(classNames) {
        let Node = this.props.componentClass || 'button',
            disabled = (this.props.disabled || this.props.loading) ? true : false;

        return (
            <Node {...this.props} className={classNames} disabled={disabled} onClick={this.handleClick} >
                {this.props.children}
            </Node>
        );
    }

    render() {
        let renderer = this.props.href || this.props.target ? 'renderLink' : 'renderButton',
            { className, myStyle, mySize, block, active, disabled, loading } = this.props,
            classNames = setClass('btn', `btn-${myStyle}`, {
                [`btn-${SIZES[mySize]}`]: mySize !== 'medium',
                'btn-block': block,
                'btn-active': active,
                'salt-loading-btn': loading,
                'disabled': disabled
            }, className);

        return this[renderer](classNames);
    }
}

export default Button;
