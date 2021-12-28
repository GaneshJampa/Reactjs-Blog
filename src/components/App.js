import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import uuid from 'react-native-uuid';
import api from '../api/posts';
import Header from './Header';
import Postcreate from './Postcreate';
import Postlist from './Postlist';
import Singlepost from './Singlepost';
import Editpost from './Editpost';

function App() {

  const LOCAL_STORAGE_KEY = "posts";
  const [posts, setPosts] = useState([]);

  const retrievePosts = async () => {
    const response = await api.get("/posts");
    return response.data;
  }

  const createpostHandler = async (post) => { 
    const request = {
      id: uuid.v4(),
      ...post
    }

    const response = await api.post("/posts", request)
    setPosts([...posts, response.data]);
  }

  const editpostHandler = async (post) => {
    const response = await api.put(`/posts/${post._id}`, post);
    const {id, title, author, content} = response.data;
    setPosts(posts.map(post => {
      if(post._id === id) {
        return {...response.data};
      }
      else {
        return post;
      }
      
      // return post._id === id ? {...response.data} : post;
    }));
  };

  const deletepostHandler = async (id) => {
    await api.delete(`/posts/${id}`);
    
    const newPostlist = posts.filter((post) => {
      return post._id !== id;
    });

    setPosts(newPostlist);
  }

  useEffect(() => {
    // const retrievePosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrievePosts) setPosts(retrievePosts);

    const getAllposts = async() => {
      const allposts = await retrievePosts();
      if(allposts) setPosts(allposts);
    };

    getAllposts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact
            render={(props) => (
            <Postlist 
            {...props} 
            posts={posts} 
            getpostID={deletepostHandler} 
            />)} />
          <Route path="/createpost" 
          render={(props) => (
            <Postcreate 
            {...props} 
            createpostHandler ={createpostHandler} 
            />)} />

          <Route path="/edit" 
          render={(props) => (
            <Editpost
            {...props} 
            editpostHandler ={editpostHandler} 
            />)} />
          <Route path="/post/:d" component={Singlepost} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
