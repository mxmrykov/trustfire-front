import {Container, Flex, Link} from "@chakra-ui/react";
import React from "react";
import {useLocation} from "react-router-dom";

export default function Navigation(): React.JSX.Element {

    const location = useLocation();

    return <Flex
        direction={{base: "column", sm: "row"}}
        align={{base: "center"}}
    >
        <Link
            href={"/"}
            fontWeight={location.pathname === "/" ? "semibold" : "light"}
            marginX={{base: 0, sm: 3}}
            textStyle={{base: "xl", sm: "md"}}
        >

            Главная
        </Link>
        <Link
            href={"/catalog"}
            fontWeight={location.pathname === "/catalog" ? "semibold" : "light"}
            marginX={{base: 0, sm: 3}}
            textStyle={{base: "xl", sm: "md"}}
        >
            Каталог
        </Link>
        <Link
            href={"/b2b"}
            fontWeight={location.pathname === "/b2b" ? "semibold" : "light"}
            marginX={{base: 0, sm: 3}}
            textStyle={{base: "xl", sm: "md"}}
        >
            Бизнесу
        </Link>
        <Container marginBottom={{base: 2, sm: 0}}/>
    </Flex>
}