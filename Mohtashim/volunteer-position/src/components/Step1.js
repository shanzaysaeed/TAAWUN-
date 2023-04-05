import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';

const Step1 = ({ onNext }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [picture, setPicture] = useState(null);
  const [pictureUrl, setPictureUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storageRef = firebase.storage().ref();
    const pictureRef = storageRef.child(`pictures/${picture.name}`);
    await pictureRef.put(picture);
    const pictureUrl = await pictureRef.getDownloadURL();
    onNext({ name, age, pictureUrl });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Picture:
        <input type="file" onChange={(e) => setPicture(e.target.files[0])} />
      </label>
      {pictureUrl && <img src={pictureUrl} alt="Profile" />}
      <br />
      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
