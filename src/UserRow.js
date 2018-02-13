import React, { Component } from 'react';

export default class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userGroup: ''
    };
  }

  updateInputs(e) {
    let value = e.target.value;
    let input = e.target.name;
    this.setState({
      [input]: value
    });
  }

  render() {
    let { removeRow, updateRow } = this.props;
    return (
      <div>
        <input value={this.state.userName} name="userName" placeholder="User Name" onChange={e => this.updateInputs(e)} onBlur={() => updateRow(this.state, this)} />
        <input value={this.state.userGroup} name="userGroup" placeholder="User Group" onChange={e => this.updateInputs(e)} onBlur={() => updateRow(this.state, this)} />
        <button onClick={() => removeRow(this)}>Remove</button>
      </div>
    );
  }
}
