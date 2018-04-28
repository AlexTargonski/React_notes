import React, { Component } from "react";
import Board                from './board'
import '../index.scss';

class Index extends Component {
  constructor(props) {
  super(props);
  this.state = {
    notes: [],
    search: ''
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

  updateSearch(e) {
    this.setState({search: e.target.value.substr(0, 20)});
  }

  render() {

    return (
        <div>
          <div className="header">
            <form onSubmit={this.addNote}>
              <input
                placeholder = "Search..."
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
              />
              <input
                placeholder = "Type text here..."
                ref={(a) => this._inputElement = a}
              />
              <button> + </button>
            </form>
          </div>
          <Board
            notes = {this.state.notes}
            delete = {this.handleDelete.bind(this)}
            searchTerm = {this.state.search}
          />
        </div>
      );
  }
}

export default Index
