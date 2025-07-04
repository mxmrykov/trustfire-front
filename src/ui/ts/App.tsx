import React from 'react';
import {Route, Routes} from "react-router-dom";
// @ts-ignore
import Home from "./screen/Home.tsx";
// @ts-ignore
import Catalog from "./screen/Catalog.tsx";
// @ts-ignore
import B2b from "./screen/B2b.tsx";
import "../css/root.css"
// @ts-nocheck
import {Provider} from "../../components/ui/provider"

export default function App() {
    return <Provider defaultTheme={"light"}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/b2b" element={<B2b/>}/>
        </Routes>
    </Provider>
}
