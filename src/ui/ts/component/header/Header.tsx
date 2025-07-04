import React from "react";
import Logo from "../../element/header/Logo";
import {Center, Flex, Separator} from "@chakra-ui/react";
import Navigation from "../../element/header/Navigation";
import AsideBtns from "../../element/header/AsideBtns";

export default function Header(): React.JSX.Element {

    return <Center>
        <header style={{width: "100%"}}>
            <Flex style={{paddingBlock: 20, paddingInline: 25, width: "100%"}} justify="space-between" align="center">
                <Logo/>
                <Navigation/>
                <AsideBtns/>
            </Flex>
            <Separator/>
        </header>
    </Center>
}