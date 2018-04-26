import React, { Component } from "react";
import Board   from './board'
import '../index.css';

class Index extends Component {
  constructor(props) {
  super(props);
  this.state = {
    notes: []
  };

  this.addNote = this.addNote.bind(this);
}

addNote(e) {
  if (this._inputElement.value !== "") {
    var newNote = {
      text: this._inputElement.value,
      id: Date.now()
    };

    this.setState((prevState) => {
      return {
        notes: prevState.notes.concat(newNote)
      };
    });

    this._inputElement.value = "";
  }

  console.log(this.state.notes);

  e.preventDefault();
}

render() {

  return (
      <div>
        <form onSubmit={this.addNote}>
          <input ref={(a) => this._inputElement = a} />
          <button> + </button>
        </form>
        <Board
          notes = {this.state.notes}
        />
      </div>
    );
  }
}

export default Index
