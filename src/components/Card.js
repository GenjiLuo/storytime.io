import React from 'react';
import 'styles/Card.scss';

class Card extends React.Component {
    render () {
        return (
            <div className='card-container'>
                <div className="card">
                    <img src={this.props.img} alt={this.props.imgDescription} />
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    img: React.PropTypes.string.isRequired,
    imgDescription: React.PropTypes.string.isRequired
};

export default Card;
