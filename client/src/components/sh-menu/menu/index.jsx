import React from 'react'
import './index.css'
import MenuIcon from '../menu-icon'
import MenuItem from '../menu-item'

/*
 * Menu-items format 
 * menuItems = {
 *   menuItem = {
 *     icon: 
 *     text: 
 *     handler: 
 *     activeItem:
 *   }
 * }
 */

class Menu extends React.PureComponent {
    state = {
        activeItem: ''
    }

    createMenuItems = (menuItems) => {
        let processedMenuItems = []
        
        menuItems.forEach((menuItem) => {
            let processedMenuItem = < MenuItem 
                icon = {menuItem.icon}
                text = {menuItem.text}
                handler = {menuItem.handler} 
                activeItem = {menuItem.activeItem}
                expanded = {this.props.menuExpanded}/>
            processedMenuItems.push(processedMenuItem)
        })
        
        return processedMenuItems
    }

    handleMenuItemClick = (activeItem) => {
        this.setState({activeItem : activeItem})
    }

    render() {
        let testIcon = [{
            icon : '',
            text : 'Lighting',
            handler : this.handleMenuItemClick, 
            activeItem: this.state.activeItem
        }, {
            icon : '',
            text : 'Heating',
            handler : this.handleMenuItemClick,
            activeItem: this.state.activeItem
        }]

        var menuItems = this.createMenuItems(testIcon);
        const expandedClass = this.props.menuExpanded ? ' expanded' : ''
        const classes = 'menu-container' + expandedClass

        return (
            <div className={classes}>
                <MenuIcon expandMenu = {this.props.expandMenu} 
                    menuExpanded = {this.props.menuExpanded}/>
                <div className = 'top-space' />
                <ul className = 'menu-ul-container'>
                    {menuItems}
                </ul>
            </div>
        )
    }
}

Menu.defaultProps = {
    menuExpanded: false
}

export default Menu