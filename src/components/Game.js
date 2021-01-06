import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');


  const [poem, setPoem] = useState([])
  const [player, setPlayer] = useState(1)
  const [currentSubmission, setCurrentSubmission] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const addSubmission = (submission) => {
    setPoem([...poem, submission]);
    setCurrentSubmission(submission);
    setPlayer(player + 1);
  }

  const onRevealPoemClick = () => {
    setIsSubmitted(true);
    setCurrentSubmission('');
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {currentSubmission !== '' ? <RecentSubmission submission={currentSubmission} /> : null }

      {isSubmitted === false ? <PlayerSubmissionForm index={player} fields={FIELDS} sendSubmission={addSubmission} /> : null }

      <FinalPoem isSubmitted={isSubmitted} submissions={poem} revealPoem={onRevealPoemClick} />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
