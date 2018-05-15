import React from 'react'
import './index.css'
import SquareToggleBtn from '../../buttons/square-toggle-button'

class LightCategory extends React.PureComponent {
    state = {

    }

    createToggleButton = (params) => {
        return <SquareToggleBtn 
            iconClass = {params.iconClass}
            onClick = {params.requestHandler}
            onClickParams = {params.reqParams}
            buttonText = {params.buttonText}/>
    }

    /* Make request to service */ 
    makeButtonRequest = (params) => {
        let reqParam = params.state ? 'Off' : 'On'

        return fetch(params.reqType + params.req + reqParam)
            .then(res => res.json())
            .then(
                (result) => {
                    debugger
                    var buttonValue = result.message === 'on' ? true : false
                    return buttonValue 
                }
            )
    }

    /* Create category content */ 
    createContent = (contentInput) => {
        let content = []

        contentInput.forEach((option) => {
            let element
            if (option.type === 'toggleButton') {
                element = this.createToggleButton(option)
                content.push(element)
            }
        })

        return content
    }

    render() {
        let classes = 'category'
        let lightsList = [
            {
                iconClass : 'flaticon-037-idea',
                reqParams : {
                    reqType: '/api/', 
                    req: 'ledSwitchAll'
                },
                requestHandler: this.makeButtonRequest,
                buttonText : 'All Leds',
                type: 'toggleButton'
            },
            {
                iconClass : 'flaticon-037-idea', 
                reqParams : {
                    reqType: '/api/', 
                    req: 'ledSwitch1'
                },
                requestHandler: this.makeButtonRequest,
                buttonText : 'Desk LED',
                type: 'toggleButton'
            },
            {
                iconClass : 'flaticon-037-idea', 
                reqParams : {
                    reqType: '/api/', 
                    req: 'ledSwitch2'
                },
                requestHandler: this.makeButtonRequest,
                buttonText : 'Theatre LED',
                type: 'toggleButton'
            }
        ]

        let content = this.createContent(lightsList)

        return (
            <div className = {classes}>
                {content}
            </div>
        )
    }
}

export default LightCategory