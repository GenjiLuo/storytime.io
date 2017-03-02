import React from 'react';
import CardTypeButton from 'components/CardTypeButton';
import 'styles/CardTypes.scss'

const cardTypes= ['Location','Item','Feeling'];

class CardTypeList extends React.Component{
    render () {
        let cardTypeButtons = [];
        cardTypes.forEach(function(name){
            cardTypeButtons.push(<CardTypeButton typeName={name} />)
        })
        return (<div id="cardTypesContainer"><ul>{cardTypeButtons}</ul></div>);
    }
}


export default CardTypeList;
