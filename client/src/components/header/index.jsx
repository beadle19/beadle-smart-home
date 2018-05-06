import React from 'react'
import './index.css'

class Header extends React.PureComponent {

    render() {
        return (
            <div className = 'app-header'>
                <h3 className = 'header-title'>
                    Beadle Smart Home
                </h3>
            </div>
        )
    }
}

export default Header;