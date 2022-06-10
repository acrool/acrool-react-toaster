import React from 'react';
import {Route, Routes} from 'react-router-dom';

// Custom
import BaseUsed from 'views/BaseUsed';
import Layout from "views/Layout";


const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<BaseUsed/>}/>
            </Route>
        </Routes>
    );
};

export default MainRouter;

