import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const emptyForm = {
  adj1: '',
  noun1: '',
  adv: '',
  verb: '',
  adj2: '',
  noun2: ''
}

const PlayerSubmissionForm = ({index, fields, sendSubmission}) => {

  const [playerForm, setPlayerForm] = useState(emptyForm)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setPlayerForm({ ...playerForm, [name]: value })
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const submission = fields.map((field) => {
      if (field.key) {
        return playerForm[field.key]
      } else {
        return field;
      }
    }).join(' ');

    sendSubmission(submission);

    setPlayerForm(emptyForm);

  }



  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ index }</h3>

      <form onSubmit={onFormSubmit} className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
            fields.map((item) => {
              return (
                item.key ? 
                  <input
                    key={item.key} 
                    placeholder={item.placeholder}
                    name={item.key}
                    onChange={handleInputChange}
                    type='text'
                  /> 
                  : item );
             })
          }
          
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
