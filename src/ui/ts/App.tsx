import React from 'react';
import {Route, Routes} from "react-router-dom";
// @ts-ignore
import Home from "./screen/Home.tsx";
import "../css/root.css"
import {Provider} from "../../components/ui/provider"

export default function App() {
    return <Provider defaultTheme={"light"}>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Provider>
}
