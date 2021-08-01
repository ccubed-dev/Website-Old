import React from "react";
import { Route } from "react-router-dom";
import { Home, NotFound } from "@pages";

const Router = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </>
    );
};

export default Router;
