import React from 'react'
import './index.css'

class SquareToggleBtn extends React.PureComponent {
    state = {
        active : false
    }

    onClickHandler = () => {
        let requestParams = {
            ...this.props.onClickParams, 
            state: this.state.active } 

        let buttonState = this.props.onClick(requestParams)
        
        buttonState.then ((buttonValue) => {
            this.setState((state) => {
                let buttonActive = buttonValue ? 'on' : ''
                return {...state, active: buttonValue}
            })
        })
    }

    render() {
        let isOn = this.state.active ? 'on' : ''
        let squaryButtonClassName = 'square-toggle-btn ' + isOn
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