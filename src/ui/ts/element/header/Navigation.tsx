import {Flex, Link} from "@chakra-ui/react";
import React from "react";
import {useLocation} from "react-router-dom";

export default function Navigation(): React.JSX.Element {

    const location = useLocation();

    return <Flex marginEnd={"auto"}>
        <Link
            style={{marginInline: 12}}
            href={"/"}
            fontWeight={location.pathname === "/" ? "semibold" : "light"}
        >

            Главная
        </Link>
        <Link
            style={{marginInline: 12}}
            href={"/catalog"}
            fontWeight={location.pathname === "/catalog" ? "semibold" : "light"}
        >
            Каталог
        </Link>
        <Link
            style={{marginInline: 12}}
            href={"/b2b"}
            fontWeight={location.pathname === "/b2b" ? "semibold" : "light"}
        >
            Бизнесу
        </Link>
    </Flex>
}