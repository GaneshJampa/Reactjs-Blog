import React from "react";
import { Link } from "react-router-dom";
import posts from "../api/posts";
import './Postcard.css';

const Postcard = (props) => {


  function refreshPage() {
    window.location.reload(false);
  }

    const { _id, title, author, content } = props.post;
  return (
    <div className="posts">
            <div className="post">
                 <Link to={{pathname:`/post/${props.post._id}`, state:{post: props.post}}}>
                    <h1 className="post-title">{title}</h1>
                </Link>
                    <p className="post-author">{author}</p>
                    <p className="post-content">{content}</p>
                  
                <Link to={{pathname:`/edit`, state:{post: props.post}}}>
                    <button className="post-edit-button"
                > Edit <i class="fas fa-edit"></i></button>
                </Link>
                <button className="post-delete-button"
                onClick={() => props.clickHandler(props.post._id)}> Delete <i class="fas fa-trash"></i></button>
            </div>
             </div>
  );
};

export default Postcard;