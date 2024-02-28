import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Start from "./page/start";
import Main from "./layout/index.jsx";
import Login from "./page/login/index.jsx";
import Main2 from "./layout/index2.jsx";
import Gallery from "./page/gallery/index.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Start />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/game" element={<Main2 />}>
                    <Route path="gallery" element={<Gallery />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
