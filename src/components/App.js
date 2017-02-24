import React from 'react';
import CardList from './CardList';
import CardTypeList from './CardTypeList';
import {Dialog} from 'react-toolbox/lib/dialog';
import {Button} from 'react-toolbox/lib/button';
import 'styles/App.scss';

class App extends React.Component {
  state = {
    dialogActive: false
  }
  actions = [
    { label: "Close", onClick: this.closeDialog },
    // { label: "Add", onClick: this.handleAddCard }
  ];
  render() {
    return (
      <div>
        <Button id="addCardBtn" onClick={this.handleAddCardBtnClick.bind(this)}>+</Button>
        <CardList ref={'cardList'} />
        <Dialog 
          active={this.state.dialogActive}
          actions={this.actions}          
          title='My awesome dialog'>
          <CardTypeList/>
        </Dialog>
      </div>
    );
  }
  handleAddCardBtnClick() {
    this.openDialog.call(this);
  }
  openDialog() {
      this.setState({ dialogActive: !this.state.dialogActive });
  }
  closeDialog() {
      this.refs.cardList.addCard.call(this.refs.cardList);
  }
}

export default App;
