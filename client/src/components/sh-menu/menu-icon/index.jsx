import React from 'react'
import './index.css'

class MenuIcon extends React.PureComponent {

    render() {
        const expandedClass = this.props.menuExpanded ? ' expanded' : ''
        const classes = 'menu-icon' + expandedClass
        
        return (
            <div className = {classes} onClick = {this.props.expandMenu}>
                <span></span> 
                <span></span> 
                <span></span>
            </div>
        )
    }
}

export default MenuIcon