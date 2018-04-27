import React, { Component } from "react";
import Board                from './board'
import '../index.scss';

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

  e.preventDefault();
}

  handleDelete(id) {
    const noteDelete = this.state.notes.filter((note) => {
      if(note.id !== id) return note;
    });

    this.setState({notes: noteDelete});
  }

render() {

  return (
      <div>
        <div className="header">
          <form onSubmit={this.addNote}>
            <input ref={(a) => this._inputElement = a} />
            <button> + </button>
          </form>
        </div>
        <Board
          notes = {this.state.notes}
          delete = {this.handleDelete.bind(this)}
        />
      </div>
    );
  }
}

export default Index
