import React from 'react';
import 'styles/Card.scss';

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
      <div className="card-container">
        <div className="card">
          <button onClick={this.handleRemoveClick}>X</button>
          <img src={this.props.img} alt={this.props.imgDescription} />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  callback: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
  img: React.PropTypes.string.isRequired,
  imgDescription: React.PropTypes.string.isRequired,
};

export default Card;
