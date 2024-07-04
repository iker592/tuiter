// TweetForm.js
import React, { useState } from 'react';

function TweetForm({ onAddTweet }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTweet(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
        maxLength={280}
      />
      <button type="submit">Tweet</button>
    </form>
  );
}

export default TweetForm;