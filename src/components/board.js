import React, { Component } from "react";
import PropTypes from 'prop-types';

class Board extends Component {

render() {
  const notes = this.props.notes.map((note, index) => {
      return(<li key={index}><a href="#"><p>{note.text}</p></a></li>)
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
