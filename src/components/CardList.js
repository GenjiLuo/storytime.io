import React from 'react';
import Card from 'components/Card';
import Images from 'stores/images.json';

const getRandomCardByType = (cardTypeName) => {
  const cardTypeObject = Images[cardTypeName];
  const keys = Object.keys(cardTypeObject);
  const randomIndex = Math.floor(Math.random(keys.length - 1));
  const cardTypeResult = keys[randomIndex];
  // todo: implement random card image by card type
  return { img: cardTypeResult, imgDescription: cardTypeObject[cardTypeResult] };
};

/** Displays Card components **/
class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }
  /** Adds a new card to cards array
   * @param {object} card - image url and description.
   * **/
  addCard = (cardTypeName) => {
    const card = getRandomCardByType(cardTypeName);
    this.setState({ cards: this.state.cards.concat([card]) });
  }
  removeCard = (index) => {
    const filtered = this.state.cards;
    filtered.splice(index, 1);
    this.setState({ cards: filtered });
  }
  /** render
   * @return {JSX} List of Cards
   * **/
  render() {
    const data = [];
    const changeCallback = this.removeCard;
    this.state.cards.forEach((card, i) => {
      const key = i;
      data.push(
        <Card
          key={key} index={i}
          img={card.img} imgDescription={card.imgDescription}
          callback={changeCallback}
        />);
    });
    return <div className="card-list">{data}</div>;
  }
}

export default CardList;
