import React from 'react';
import CardTypeButton from 'components/CardTypeButton';
import 'styles/CardTypes.scss'

const cardTypes = ['Location', 'Item', 'Feeling'];

class CardTypeList extends React.Component {
    render() {
        let cardTypeButtons = [];
        let callback = this.props.callback;
        cardTypes.forEach(function (name, i) {
            cardTypeButtons.push(<CardTypeButton key={i} typeName={name} callback={callback} />)
        })
        return (<div id="cardTypesContainer"><ul>{cardTypeButtons}</ul></div>);
    }
}

CardTypeList.propTypes = {
    callback: React.PropTypes.any
}
export default CardTypeList;
