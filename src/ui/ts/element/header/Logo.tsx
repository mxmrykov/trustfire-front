import {Image} from "@chakra-ui/react";
import l from "../../../media/logo/bigLogo.png"
import React from "react";

export default function Logo(): React.JSX.Element {
    return <Image style={{width: 120, maxWidth: "45%", marginRight: 25}} rounded="md" src={l} alt={"logo"}/>
}