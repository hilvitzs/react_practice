import React, { Component } from 'react';
import update from 'immutability-helper';
import { Header } from './Header';
import { UserRowList } from './UserRowList';
import { Footer } from './Footer';

class App extends Component {
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
      cards: [...this.state.cards, {}]
    });
  }

  removeRow(index) {
    let oldState = this.state.cards;
    let key = parseInt(index._reactInternalFiber.key, 10);
    let newState = update(oldState, { $splice: [[key, 1]] });
    console.table(newState);
    this.setState({
      cards: newState
    });
  }

  updateRow(obj, instance) {
    let cardsIndex = parseInt(instance._reactInternalFiber.key, 10);
    let cardsState = this.state.cards;
    cardsState[cardsIndex] = obj;
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

export default App;
