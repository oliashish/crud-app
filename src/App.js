import React from "react";
import { Switch, Route } from "react-router-dom";

import CreateArticles from "./CreateArticels";

import "./App.css";
import Articles from "./Articles";
import Home from "./Home";

const App = () => {
    return (
        <div className="description">
            <Switch>
                <Route exact path="/" component={Home}></Route>

                <Route
                    exact
                    path="/create_article"
                    component={CreateArticles}
                ></Route>
                <Route exact path="/all_articles" component={Articles}></Route>
            </Switch>
        </div>
    );
};

export default App;
