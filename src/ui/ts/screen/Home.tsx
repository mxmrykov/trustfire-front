import React from "react";
import BaseComponents from "./BaseComponents"
import DevBlock from "../component/home/DevBlock";
import {Flex} from "@chakra-ui/react";

export default function Home(): React.JSX.Element {
    return <BaseComponents>
        <Flex align={"center"} justify={"center"} style={{height: "85vh"}}>
            <DevBlock/>
        </Flex>
    </BaseComponents>
}