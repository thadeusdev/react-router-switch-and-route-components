import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

/*
Client Side Routing
- URLs
- REST - REpresentation State Transfer

npm install react-router-dom
https://reactrouter.com/web/guides/quick-start
*/

function App() {
    const [page, setPage] = useState("/")
    
    return (
        <div>
            <NavBar onChangePage={setPage} />
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <ProjectList />
                </Route>
            </Switch>
        </div>
    );
}

export default App;