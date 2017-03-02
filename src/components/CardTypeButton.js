import React from 'react'
import Button from 'react-toolbox/lib/button'

class CardTypeButton extends React.Component{
    render(){
        return (<li><Button id={"type-" + this.props.typeName}>{this.props.typeName}</Button></li>)
    }
}

CardTypeButton.propTypes = {
    typeName: React.PropTypes.string.isRequired
}

export default CardTypeButton