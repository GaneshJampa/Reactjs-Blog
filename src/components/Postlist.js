import React from "react";
import Postcard from "./Postcard";


const Postlist = (props) => {
    

    const deletepostHandler = (id) => {
        props.getpostID(id);
    }


    const renderPostlist = props.posts.map((post) => {
       
        return (
            <Postcard
              post={post}
              clickHandler={deletepostHandler}
              key = {post.id}
            />
          );
       
    })

    
    return (
        <>
            {renderPostlist}
        </>
    )
}

export default Postlist;
