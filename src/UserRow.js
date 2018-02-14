import React, { Component } from 'react';

export default class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userGroup: '',
      id: props.id
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
    let { removeRow, updateRow, id } = this.props;
    return (
      <div>
        <input value={this.state.userName} name="userName" placeholder="User Name" onChange={e => this.updateInputs(e)} onBlur={() => updateRow(this.state)} />
        <input value={this.state.userGroup} name="userGroup" placeholder="User Group" onChange={e => this.updateInputs(e)} onBlur={() => updateRow(this.state)} />
        <button onClick={() => removeRow(id)}>Remove</button>
      </div>
    );
  }
}
