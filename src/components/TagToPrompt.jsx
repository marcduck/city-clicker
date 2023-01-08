import React, { useState } from 'react';

function TagToPrompt() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  function modifyString(inputString) {
    // Split the input string on '?'
    const splitString = inputString.split('?');
  
    // Remove the first element from the list, as it is empty
    splitString.shift();
  
    // Delete the last word and leading/trailing whitespace from each element
    const modifiedList = splitString.map(s => s.replace(/\s*\S+$/, '').trim());
  
    // Join the modified elements with a comma and return the result
    return modifiedList.join(', ');
  }
  

  const handlePaste = event => {
    event.preventDefault();
    const paste = event.clipboardData.getData('text');
    setInput(paste);
    setOutput(modifyString(paste));
  };

  return (
    <div>
      <label htmlFor="input-area">Input GB tags here:</label>
      <textarea id="input-area" value={input} onChange={handleChange} onPaste={handlePaste} />
      <div>{output}</div>
    </div>
  );
}

export default TagToPrompt;