import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/WF.jpg';
import classes from '../styles/Story.module.css';

export default function Story({ post }) {
  console.log(typeof post);
  let path = window.location.pathname;
  //console.log(path);
  if (path === '/') {
    path = path + 'stories/' + post.id;
  } else {
    path = '/stories/' + post.id;
  }
  return (
    //<Link to={`stories/${post.id}`}>
    <Link to={path}>
      <div className={classes.story}>
        <img src={image} alt="" />
        <p>
          #{post.id} {post.title}
        </p>
        <div className={classes.qmeta}>
          <p>Topic: {post.topic}</p>
        </div>
        <div className={classes.qmeta}>
          <p> Difficulty : {post.difficulty}</p>
        </div>
        <div>
          <div className={classes.desc}>Description: {post.description.substring(0, 200)}</div>
          <div className={classes.p}>Click to read more</div>
        </div>
        <div>
          <p>Created At: {new Date(post.createdAt).toDateString()}</p>
        </div>
      </div>
    </Link>
  );
}
