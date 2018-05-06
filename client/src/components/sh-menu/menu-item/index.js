import React from 'react'
import './index.css'

class MenuItem extends React.PureComponent {

    handleMenuItemClick = () => {
        this.props.handler(this.props.text)
    }

    render() {
        let expandedClass = this.props.expanded ? ' expanded' : ''
        let activeClass = this.props.text === this.props.activeItem ? ' active' : ''
        let classes = 'menu-item' + expandedClass + activeClass

        return (
        <li className = {classes} onClick = {this.handleMenuItemClick}>
            <a>
                <span className = 'menu-item-icon flaticon-037-idea'> 
                    <p>{this.props.text}</p>
                </span>
            </a>
        </li>)
    }
}

export default MenuItem