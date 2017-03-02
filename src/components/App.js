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
      dialogActive: false
    };
  }
  openDialog() {
    this.setState({ dialogActive: true });
  }
  closeDialog() {
    this.setState({ dialogActive: false });
  }
  addCard(cardTypeName) {
    this.refs.cardList.addCard.call(this.refs.cardList, cardTypeName);
  }
  render() {
    return (
      <div>
        <Button id="addCardBtn" onClick={this.openDialog.bind(this)}>+</Button>
        <CardList ref={'cardList'} />
        <Dialog active={this.state.dialogActive}
          onEscKeyDown={this.closeDialog.bind(this)}
          onOverlayClick={this.closeDialog.bind(this)}
          theme={CustomDialog}>
          <CardTypeList callback={this.addCard.bind(this)} />
        </Dialog>
      </div>
    );
  }
}

export default App;
