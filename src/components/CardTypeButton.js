import React from 'react';
import Button from 'react-toolbox/lib/button';
import CardTypeTheme from 'styles/CardType.css';

class CardTypeButton extends React.Component {
  handleClick = () => {
    this.props.callback(this.props.typeName);
  }
  render() {
    return (<Button className={CardTypeTheme[`type-${this.props.typeName}`]} onClick={this.handleClick}>{this.props.typeName}</Button>);
  }
}

CardTypeButton.propTypes = {
  typeName: React.PropTypes.string.isRequired,
  callback: React.PropTypes.func.isRequired,
};

export default CardTypeButton;
