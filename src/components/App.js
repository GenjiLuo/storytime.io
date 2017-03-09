import React from 'react';
import CardList from 'components/CardList';
import CardTypeList from 'components/CardTypeList';
import Dialog from 'react-toolbox/lib/dialog';
import Button from 'react-toolbox/lib/button';
import CustomDialog from 'styles/customToolbox/CustomDialog.css';
import 'styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dialogActive: false,
    };
  }
  openDialog = () => {
    this.setState({ dialogActive: true });
  }
  closeDialog = () => {
    this.setState({ dialogActive: false });
  }
  addCard = (cardTypeName) => {
    this.cardList.addCard.call(this.cardList, cardTypeName);
  }
  render() {
    return (
      <div>
        <Button id="addCardBtn" onClick={this.openDialog}>+</Button>
        <CardList ref={(cardList) => { this.cardList = cardList; }} />
        <Dialog
          active={this.state.dialogActive}
          onEscKeyDown={this.closeDialog}
          onOverlayClick={this.closeDialog}
          theme={CustomDialog}
        >
          <CardTypeList callback={this.addCard} />
        </Dialog>
      </div>
    );
  }
}

export default App;
