import React, { Component } from "react";
import PropTypes from 'prop-types';

class Board extends Component {

render() {
  let filterdNotes = this.props.notes.filter(
    (note) => {
      return note.text.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) !== -1;
    });

  const notes = filterdNotes.map((note, index) => {
      return(<li key={index}>
              <a href="#"><p className="delete" onClick={() => this.props.delete(note.id)}>X</p><p>{note.text}</p></a>
            </li>)
    })

  return (
      <ul>
        {notes}
      </ul>
    );
  }
}

Board.propTypes = {
  notes: PropTypes.array
};

export default Board
