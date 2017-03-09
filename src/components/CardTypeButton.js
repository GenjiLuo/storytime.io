import React from 'react';
import Button from 'react-toolbox/lib/button';

class CardTypeButton extends React.Component {
  handleClick = () => {
    this.props.callback(this.props.typeName);
  }
  render() {
    return (<li><Button id={`type-${this.props.typeName}`} onClick={this.handleClick}>{this.props.typeName}</Button></li>);
  }
}

CardTypeButton.propTypes = {
  typeName: React.PropTypes.string.isRequired,
  callback: React.PropTypes.func.isRequired,
};

export default CardTypeButton;
