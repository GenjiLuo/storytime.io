import React from 'react';
import CardTypeButton from 'components/CardTypeButton';
import 'styles/CardTypes.scss';


class CardTypeList extends React.Component {
  constructor() {
    super();
    this.state = {
      cardTypes: ['Location', 'Item', 'Feeling'],
    };
  }
  render() {
    const cardTypeButtons = [];
    const callback = this.props.callback;
    this.state.cardTypes.forEach((name, i) => {
      const key = i;
      cardTypeButtons.push(<CardTypeButton key={key} typeName={name} callback={callback} />);
    });
    return (<div id="cardTypesContainer"><ul>{cardTypeButtons}</ul></div>);
  }
}

CardTypeList.propTypes = {
  callback: React.PropTypes.func.isRequired,
};

export default CardTypeList;
