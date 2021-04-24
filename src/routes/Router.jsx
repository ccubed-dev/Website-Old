import React from "react";
import { Route } from "react-router-dom";
import { Home } from '@scenes';

const Router = () => {
    return (
        <>
            <Route path="/"><Home /></Route>
            {/* <Route path="/category"><Category /></Route>
            <Route path="/products"><Products /></Route> */}
        </>
    )
}

export default Router