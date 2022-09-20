import React, { useState } from 'react';
import './Tweetbox.css';
import { Avatar, Button } from '@mui/material';
import { db } from '../../firebase-config';
import {
  addDoc,
  collection,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const postsCollectionRef = collection(db, 'posts');

  // https://www.youtube.com/watch?v=jCY6DH8F4oc&t=1410s&ab_channel=PedroTech
  const sendTweet = async (e) => {
    e.preventDefault();

    await addDoc(postsCollectionRef, {
      avatar:
        'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
      displayName: 'Lina Choi',
      image: tweetImage,
      text: tweetMessage,
      username: 'choilina16',
      verified: true,
      createdAt: serverTimestamp(),
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          {/* Avatar */}
          <Avatar src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg" />

          {/* Input Box for messages */}
          <input
            // SetTweetMessage wil = the value in the input box
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        {/* Input Box for adding images */}
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        {/* Submit Button */}
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
