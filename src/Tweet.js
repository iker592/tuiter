// Tweet.js
import React from 'react';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <strong>{tweet.username}</strong>
      <p>{tweet.text}</p>
      <small>{tweet.timestamp}</small>
    </div>
  );
}

export default Tweet;