import React from 'react';
import CardTheme from 'styles/Card.css';
import Button from 'react-toolbox/lib/button';

class Card extends React.Component {
  constructor() {
    super();
    this.state = { active: true };
  }
  handleRemoveClick = () => {
    this.setState({ active: false });
    this.props.callback(this.props.index);
  }
  render() {
    return (
      <div className={CardTheme.wrapper} theme={CardTheme}>
        <div className={CardTheme.main}>
          <img className={CardTheme.image} src={`images/${this.props.img}.svg`} alt={this.props.description} />
        </div>
        <Button className={CardTheme.button} onClick={this.handleRemoveClick}>X</Button>
      </div>
    );
  }
}

Card.propTypes = {
  callback: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
  img: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default Card;
