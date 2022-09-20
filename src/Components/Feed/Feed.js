import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { db } from '../../firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, 'posts');
  // https://www.youtube.com/watch?v=jCY6DH8F4oc&t=1410s&ab_channel=PedroTech
  useEffect(() => {
    const getPosts = async () => {
      // getDocs => returns all the data from a collection
      // 
      const data = await getDocs(postsCollectionRef);
      console.log(data);
      // ...doc.data includes the data, but does not include the ID
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            // should be using the firebase ID instead
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
