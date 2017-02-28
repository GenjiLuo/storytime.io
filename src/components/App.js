import React from 'react';
import CardList from 'components/CardList';
import CardTypeList from 'components/CardTypeList';
import { Dialog } from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';
import 'styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dialogActive: false
    };
  }
  handleAddCardBtnClick() {
    this.openDialog();
  }
  openDialog() {
    this.setState({ dialogActive: !this.state.dialogActive });
  }
  closeDialog() {
    this.refs.cardList.addCard.call(this.refs.cardList);
  }
  render() {
    return (
      <div>
        <Button id="addCardBtn" onClick={this.handleAddCardBtnClick}>+</Button>
        <CardList ref={'cardList'} />
        <Dialog active={this.state.dialogActive} actions={this.actions}>
          <CardTypeList />
        </Dialog>
      </div>
    );
  }
}

App.defaultProps = {
  actions: [{
    label: 'Close',
    onClick: this.closeDialog
  }]
};

export default App;
