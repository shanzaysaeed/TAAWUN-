import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Step2 = ({ onBack, onSubmit }) => {
  const [profession, setProfession] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    const docRef = await db.collection('users').add({ profession, about });
    onSubmit(docRef.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Profession:
        <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} />
      </label>
      <br />
      <label>
        About:
        <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
      </label>
      <br />
      <button type="button" onClick={onBack}>
        Back
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Step2;
