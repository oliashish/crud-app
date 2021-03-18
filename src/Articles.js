import React, { useState, useEffect } from "react";

import Axios from "axios";
import "./Articles.css";

const Articles = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5000/posts")
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
    });

    return (
        <div className="show-articles-container">
            <p>This is the component Where all the articles will e displayed</p>
            {posts.map((post) => {
                return (
                    <div className="article-container">
                        <h3 key={post.id}>{post.title}</h3>
                        <span>{post.country}</span>
                        <span>{post.created_on}</span>
                        <p>{post.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Articles;
