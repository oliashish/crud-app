import React, { useState } from "react";
import "./CreateArticle.css";
import Axios from "axios";

const CreateArticles = () => {
    const [title, setTitle] = useState();
    const [createdOn, setCreatedOn] = useState();
    const [country, setCountry] = useState();
    const [description, setDescription] = useState();

    const postData = () => {
        Axios.post("http://localhost:5000/create", {
            title: title,
            createdOn: createdOn,
            country: country,
            description: description,
        }).then(console.log("success"));
    };

    return (
        <div className="content-alignment">
            <p>This is a normal form for a creating new Blogs.</p>
            <label>Title</label>
            <input
                type="text"
                placeholder="enter title..."
                required
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            ></input>

            <label>Created On</label>
            <input
                type="text"
                placeholder="Enter date..."
                required
                onChange={(event) => {
                    setCreatedOn(event.target.value);
                }}
            ></input>
            <label>Country</label>
            <input
                type="text"
                placeholder="enter country"
                required
                onChange={(event) => {
                    setCountry(event.target.value);
                }}
            ></input>
            <label>Description</label>
            <textarea
                type="text"
                placeholder="enter description..."
                required
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
            />
            <button onClick={postData}>Create</button>
        </div>
    );
};

export default CreateArticles;
