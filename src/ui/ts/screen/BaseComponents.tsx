import Header from "../component/header/Header"
import React from "react";

// @ts-ignore
export default function BaseComponents({children}): React.JSX.Element {
    return <section>
        <Header/>
        <section>
            {children}
        </section>
    </section>
}