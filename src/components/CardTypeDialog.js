import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import CardTypeList from './CardTypeList';

class CardTypeDialog extends Dialog {
  render() {
    return (<div><CardTypeList /></div>);
  }
  handleAddBtnClick() {
    this.closeDialog();
  }
}

export default CardTypeDialog;
