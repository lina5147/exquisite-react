import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({index, fields, sendSubmission}) => {

  const [playerForm, setPlayerForm] = useState( {
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setPlayerForm({ ...playerForm, [name]: value })
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    sendSubmission(playerForm)

    setPlayerForm({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    })

  }



  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ index }</h3>

      <form onSubmit={onFormSubmit} className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          The
          <input
            placeholder="adjective"
            name="adj1"
            value={playerForm.adj1}
            onChange={handleInputChange}
            type="text" />
          <input
            placeholder="noun"
            name='noun1'
            value={playerForm.noun1}
            onChange={handleInputChange}
            type="text" />
          <input
            placeholder="adverb"
            name='adv'
            value={playerForm.adv}
            onChange={handleInputChange}
            type="text" />
          <input
            placeholder="verb"
            name='verb'
            value={playerForm.verb}
            onChange={handleInputChange}
            type="text" />
          the
          <input
            placeholder="adjective"
            name='adj2'
            value={playerForm.adj2}
            onChange={handleInputChange}
            type="text" />
          <input
            placeholder="noun"
            name='noun2'
            value={playerForm.noun2}
            onChange={handleInputChange}
            type="text" />
          .
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
