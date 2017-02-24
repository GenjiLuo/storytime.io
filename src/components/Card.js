import React from 'react';
import 'styles/Card.scss';

class Card extends React.Component {
    static propTypes = {
        img: React.PropTypes.string.isRequired,
        imgDescription: React.PropTypes.string.isRequired
    }
    render () {
        return (
            <div className='card-container'>
                <div className="card">
                    <img src={this.props.img} alt={this.props.imgDescription}></img>
                </div>
            </div>
        );
    }
}

export default Card;
