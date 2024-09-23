import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const getUniqueWordCount = () => {
    const words = text.split(' ').map(word => word.trim().toLowerCase());
    const cleanedWords = words.filter(word => {
      return word.length > 0 && isAlphanumeric(word);
    });
    const uniqueWords = new Set(cleanedWords);
    return uniqueWords.size;
  };

  const isAlphanumeric = (word) => {
    for (let char of word) {
      if (!isLetterOrNumber(char)) {
        return false;
      }
    }
    return true;
  };

  const isLetterOrNumber = (char) => {
    return (
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      (char >= '0' && char <= '9')
    );
  };

  const getCharacterCount = () => {
    let count = 0;
    for (let char of text) {
      if (isLetterOrNumber(char)) {
        count++;
      }
    }
    return count;
  };

  const handleReplace = () => {
    setText(text.split(searchString).join(replaceString));
  };

  return (
    <div className="App">
      <h1>Real-Time Text Analyzer</h1>

      <textarea 
        value={text} 
        onChange={handleTextChange} 
        placeholder="Type here..." 
        rows="10" 
        cols="50"
      />

      <div className="stats">
        <p>Unique Words: {getUniqueWordCount()}</p>
        <p>Character Count (Excluding Spaces and Punctuation): {getCharacterCount()}</p>
      </div>

      <div className="replace-section">
        <input
          type="text"
          placeholder="Search for..."
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <input
          type="text"
          placeholder="Replace with..."
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
        />
        <button onClick={handleReplace}>Replace All</button>
      </div>
    </div>
  );
}

export default App;
