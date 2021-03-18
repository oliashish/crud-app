import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

const Home = () => {
    return (
        <div className="description">
            <p>
                This is basic CRUD app that I'm making at the same time learning
                too.
                <br />
                A basic CRUD application is an application that combines to form
                a fullstack technology, <br />
                that has a frontend, a backend, and a database.
                <br />
                The crud ap performs basic operations namely <b>C</b>
                reate,
                <b>R</b>ead, <b>u</b>dpdate, <b>D</b>elete
            </p>
            <Link to="/create_article" className="description">
                <button className="article-button">Create Article</button>
            </Link>
            <Link to="all_articles" className="description">
                <button className="article-button">See all Article</button>
            </Link>
        </div>
    );
};

export default Home;
