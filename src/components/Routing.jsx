import React from 'react';
import { Routes, Route } from "react-router-dom";
import Addstudent from './Addstudent';
import Editstudent from './Editstudent';
import Home from './Home';

const Routing = () => {
    return (
        <>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/addstudent" element={<Addstudent />} />
                <Route exact path="/editstudent/:userID" element={<Editstudent />} />
            </Routes>
        </>
    );
};

export default Routing;