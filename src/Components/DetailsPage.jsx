// import React from 'react';
// import { useSelector } from "react-redux";

// const DetailsPage = () => {
//   const { post } = useSelector((state) => state.detailsCard);
  
//   if(!post) return <h1>Loading...</h1>
  
//   return (
//     <div className='details-container'>
//       <h2>Details Page For Post With ID {post.id}</h2>
//       <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
//       <p>User ID: {post.userId}</p>
//       <h3>Title: {post.title}</h3>
//       <p>Body: {post.body}</p>
//   </div>
//   )
// }

// export default DetailsPage



import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const { post } = useSelector((state) => state.detailsCard);
  const [showDetails, setShowDetails] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  if (!post) return <h1>Loading...</h1>;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    setShowUserInfo(false);
  };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
    setShowDetails(false);
  };

  return (
    <div className='details-container'>
      <h2>Details Page For Post With ID {post.id}</h2>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
      <div style={{ margin: '10px 0' }}>
        <button onClick={toggleDetails}>Show Details</button>
        <button onClick={toggleUserInfo}>User Info</button>
      </div>
      {showDetails && (
        <div>
          <p>User ID: {post.userId}</p>
          <h3>Title: {post.title}</h3>
          <p>Body: {post.body}</p>
        </div>
      )}
      {showUserInfo && <p>Post Was Posted By User ID: {post.userId}</p>}
    </div>
  );
};

export default DetailsPage;
