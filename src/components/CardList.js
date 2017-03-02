import React from 'react';
import Card from 'components/Card';

/** Displays Card components **/
class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }
  /** Adds a new card to cards array
   * @param {object} card - image url and description.
   * **/
  addCard(cardTypeName) {
    let card = this.getRandomCardByType(cardTypeName);
    this.setState({ cards: this.state.cards.concat([card]) });
  }
  removeCard(index) {
    var filtered = this.state.cards;
    filtered.splice(index, 1);
    this.setState({ cards: filtered });
  }
  getRandomCardByType(cardTypeName){
    //todo: implement random card image by card type
    return { img: cardTypeName, imgDescription: cardTypeName }
  }
  /** render
   * @return {JSX} List of Cards
   * **/
  render() {
    const data = [];
    const changeCallback = this.removeCard.bind(this);
    this.state.cards.forEach(function (card, i) {
      data.push(
        <Card key={i} index={i} img={card.img} imgDescription={card.imgDescription} callback={changeCallback} />);
    });
    return <div className='card-list'>{data}</div>;
  }
}

export default CardList;
