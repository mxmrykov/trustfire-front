import {Button, Center, Image, Separator, Stack} from "@chakra-ui/react";
import DevWarn from "../../element/dev_warn/DevWarn";
import {FiArrowRight} from "react-icons/fi";
import React from "react";
import wb from "../../../media/under_dev/logo/logoWb.svg"
import ozon from "../../../media/under_dev/logo/logoOzon.png"
import ya from "../../../media/under_dev/logo/logoYandex.png"
import {LightMode} from "../../../../components/ui/color-mode";

export default function DevBlock(): React.JSX.Element {
    return <Center>
        <Stack style={{width: 350, maxWidth: "90%"}}>
            <DevWarn/>
            <Separator style={{marginBlock: 15}}/>
            <Button
                colorPalette={"purple"}
                height={"11"}
                variant={"solid"}
                rounded={"lg"}
                asChild
            >
                <a href={"https://www.wildberries.ru/seller/250012488"}>
                    <Image height={"9"} src={wb}/>
                    {/*@ts-ignore*/}
                    <FiArrowRight/>
                </a>
            </Button>
            <Button
                colorPalette={"blue"}
                variant={"surface"}
                height={"11"}
                rounded={"lg"}
                asChild
            >
                <a href={"https://www.ozon.ru/seller/trustfire-2938787/?miniapp=seller_2938787"}>
                    <Image height={"8"} src={ozon}/>
                    {/*@ts-ignore*/}
                    <FiArrowRight/>
                </a>
            </Button>
            <LightMode>
                <Button
                    colorPalette={"orange"}
                    variant={"surface"}
                    height={"11"}
                    rounded={"lg"}
                    asChild
                >
                    <a href={"https://market.yandex.ru/business--trustfire/212899889"}>
                        <Image height={"7"} src={ya}/>
                        {/*@ts-ignore*/}
                        <FiArrowRight/>
                    </a>
                </Button>
            </LightMode>
        </Stack>
    </Center>
}