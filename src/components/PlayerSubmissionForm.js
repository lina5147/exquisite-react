import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {

  const [playerForm, setPlayerForm] = useState( {
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: ''
  })



  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          The
          <input
            placeholder="adjective"
            name="adj1"
            value={playerForm.adj1}
            type="text" />
          <input
            placeholder="noun"
            name='noun1'
            value={playerForm.noun1}
            type="text" />
          <input
            placeholder="adverb"
            name='adv'
            value={playerForm.adv}
            type="text" />
          <input
            placeholder="verb"
            name='verb'
            value={playerForm.verb}
            type="text" />
          the
          <input
            placeholder="adjective"
            name='adj2'
            value={playerForm.adj2}
            type="text" />
          <input
            placeholder="noun"
            name='noun2'
            value={playerForm.noun2}
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
