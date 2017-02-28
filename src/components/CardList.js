import React from 'react';
import Card from 'components/Card';

/** Displays Card components **/
class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [{
        img: 'test',
        imgDescription: 'test'
      }]
    };
  }
  /** Adds a new card to cards array
   * @param {object} card - image url and description.
   * **/
  addCard(card) {
    this.setState({ cards: this.state.cards.concat([card]) });
    // smoothScrollToBottom();
    // function smoothScrollToBottom(){
    //   window.smoothScroll(window.innerHeight, 1);
    // }
  }
  /** render
   * @return {JSX} List of Cards
   * **/
  render() {
    const data = [];
    this.state.cards.forEach(function (card, i) {
      data.push(
        <Card key={i} img={card.img} imgDescription={card.imgDescription} />);
    });
    return <div className='card-list'>{data}</div>;
  }
}

export default CardList;
