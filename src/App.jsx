import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Start from "./page/start";
import Main from "./layout/index.jsx";
import Login from "./page/login/index.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Start />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
