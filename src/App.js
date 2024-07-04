// App.js
import React, { useState } from 'react';
import TweetList from './TweetList';
import TweetForm from './TweetForm';

function App() {
  const [tweets, setTweets] = useState([]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text: text,
      username: 'User',
      timestamp: new Date().toLocaleString(),
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="App">
      <h1>Twitter Clone</h1>
      <TweetForm onAddTweet={addTweet} />
      <TweetList tweets={tweets} />
    </div>
  );
}

export default App;