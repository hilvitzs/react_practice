import React, { Component } from 'react';
import update from 'immutability-helper';
import { Header } from './Header';
import { UserRowList } from './UserRowList';
import { Footer } from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };

    this.addRow = this.addRow.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.updateRow = this.updateRow.bind(this);
  }

  addRow() {
    this.setState({
      cards: [...this.state.cards, { id: Date.now() }]
    });
  }

  removeRow(id) {
    let oldState = this.state.cards;
    let card = this.state.cards.find(card => id === card.id)
    let cardId = this.state.cards.indexOf(card);
    let newState = update(oldState, { $splice: [[cardId, 1]] });
    this.setState({
      cards: newState
    });
  }

  updateRow(updatedRow) {
    let specificObject = this.state.cards.find(card => updatedRow.id === card.id)
    let cardsIndex = this.state.cards.indexOf(specificObject);
    let cardsState = this.state.cards;
    cardsState[cardsIndex] = updatedRow;
    this.setState({
      cards: cardsState
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <UserRowList cardsList={this.state.cards} removeRow={this.removeRow} updateRow={this.updateRow} />
        <Footer addRow={this.addRow} />
      </div>
    );
  }
}
