import React, { Component } from "react";
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
  console.log(this.state)
  const notes = this.state.notes.map((note, index) => {
      return(<li key={index}><a href="#"><p>{note.text}</p></a></li>)
    })

  return (
      <div>
        <form onSubmit={this.addNote}>
          <input ref={(a) => this._inputElement = a} />
          <button> + </button>
        </form>
        <ul>
          {notes}
        </ul>
      </div>
    );
  }
}

export default Index
