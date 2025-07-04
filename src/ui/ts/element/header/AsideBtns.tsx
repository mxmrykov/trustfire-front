import {Tooltip} from "../../../../components/ui/tooltip";
import {Button, HStack} from "@chakra-ui/react";
import {FiMoon, FiSun, FiUser} from "react-icons/fi";
import React from "react";
import {useColorMode} from "../../../../components/ui/color-mode";

export default function AsideBtns(): React.JSX.Element {

    const {toggleColorMode, colorMode} = useColorMode()

    return <HStack>
        <Tooltip
            content="Вход в аккаунт"
            openDelay={100}
            closeDelay={100}
        >
            <Button colorPalette="blue" variant="solid" width="10" height="10"
                    onClick={() => window.location.href = "/auth"}>
                {/*@ts-ignore*/}
                <FiUser width="10" height="10"/>
            </Button>
        </Tooltip>
        <Tooltip
            content="Сменить тему"
            openDelay={100}
            closeDelay={100}
        >
            <Button colorPalette="blue" variant="outline" width="10" height="10" onClick={toggleColorMode}>
                {/*@ts-ignore*/}
                {colorMode !== "light" ? <FiSun/> : <FiMoon/>}
            </Button>
        </Tooltip>
    </HStack>
}