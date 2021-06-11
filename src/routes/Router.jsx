import React from "react";
import { Route } from "react-router-dom";
import { Home } from "@scenes";

const Router = () => {
    return (
        <>
            <Route exact path="/"><Home /></Route>
        </>
    );
};

export default Router;