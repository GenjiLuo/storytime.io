import React from 'react';
import CardList from 'components/CardList';
import CardTypeList from 'components/CardTypeList';
import Dialog from 'react-toolbox/lib/dialog';
import CustomDialog from 'styles/CustomDialog.css';
import AddCardTheme from 'styles/AddCardButton.css';
import Button from 'react-toolbox/lib/button';
import AppTheme from 'styles/App.css';

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
      <div className={AppTheme.app}>
        <Button theme={AddCardTheme} onClick={this.openDialog}>+</Button>
        <CardList ref={(cardList) => { this.cardList = cardList; }} />
        <Dialog
          active={this.state.dialogActive}
          onEscKeyDown={this.closeDialog}
          onOverlayClick={this.closeDialog}
          theme={CustomDialog}
        >
          <CardTypeList callback={this.addCard} />
          <Button className={AppTheme.closeDialogButton} onClick={this.closeDialog}>Close</Button>
        </Dialog>
      </div>
    );
  }
}

export default App;
