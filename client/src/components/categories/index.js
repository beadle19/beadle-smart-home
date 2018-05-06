import React from 'react'
import LightsCategory from './lightsCategory'
import './index.css'

class Categories extends React.PureComponent {

    render() {
        let fullWidth = this.props.menuExpanded ? ' fullWidth' : ''
        let classes = 'categories-container' + fullWidth

        return (
            <div className = {classes}>
                <LightsCategory />
            </div>
        )
    }
}

export default Categories