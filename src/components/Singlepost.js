import React from "react";
import { Link } from "react-router-dom";
import './Postcard.css';

const Singlepost = (props) => {


    console.log(props);
    const {title, author, content} = props.location.state.post;
    return (
        <>
                    <div className="posts">
                        
                                <h1 className="post-title">{title}</h1>
                            
                            <p className="post-author">{author}</p>
                            <p className="post-content">{content}</p>
                            
                        
                        
                    </div>
                    <Link to="/">
                    <button className="single-post-button">Back to posts </button>
                    </Link>
                    </>
    )
}

export default Singlepost;