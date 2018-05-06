import React from 'react'
import './index.css'

class SquareToggleBtn extends React.PureComponent {
    state = {
        active : false
    }

    onClickHandler = () => {
        debugger
        let requestParams = {
            ...this.props.onClickParams, 
            state: this.state.active } 

        let buttonState = this.props.onClick(requestParams)
        
        this.setState((state) => {
            let buttonActive = buttonState ? 'on' : ''
            return {...state, isOn : buttonActive}
        })
    }

    render() {
        let isOn = this.state.active ? 'on' : ''
        let squaryButtonClassName = 'square-toggle-btn ' + this.state.isOn
        let iconClassName = 'st-btn-icon ' + this.props.iconClass

        return (
            <div className = {squaryButtonClassName} onClick = {this.onClickHandler} >
                <div className = {iconClassName} />
                <h6 className = 'st-btn-text'> {this.props.buttonText} </h6>
            </div>
        )
    }
}

export default SquareToggleBtn