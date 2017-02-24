import React from 'react'
import Card from './Card'

class CardList extends React.Component {
  state = {
    cards: [{
      img: 'test',
      imgDescription: 'test',
    }]
  }
  addCard(card) {
    this.setState({ cards: this.state.cards.concat([card]) });
    // smoothScrollToBottom();
    // function smoothScrollToBottom(){
    //   window.smoothScroll(window.innerHeight, 1);
    // }
  }
  render() {
    var data = [];
    this.state.cards.forEach(function (card, i) {
      data.push(<Card key={i} img={card.img} imgDescription={card.imgDescription} />);
    });
    return (<div className='card-list'>{data}</div>);
  }
}

export default CardList;