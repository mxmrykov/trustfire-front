import React from "react";
import Logo from "../../element/header/Logo";
import { Button, Center, Collapsible, Container, Flex, Separator, Stack} from "@chakra-ui/react";
import Navigation from "../../element/header/Navigation";
import AsideBtns from "../../element/header/AsideBtns";
import {FiMenu} from "react-icons/fi";

export default function Header(): React.JSX.Element {

    return <Center>
        <header style={{width: "100%"}}>
            <Stack>
            </Stack>
            <Collapsible.Root>
                <Flex
                    style={{paddingBlock: 20, paddingInline: 25, width: "100%"}}
                    justify="space-between"
                    align="center"
                >
                    <Container
                        width={"auto"}
                        p={0} m={0}
                        marginRight={{base: 0, sm: 25}}
                    >
                        <Logo/>
                    </Container>
                    <Container
                        marginEnd={"auto"} p={0}
                        display={{base: "none", sm: "block"}}
                    >
                        <Navigation/>
                    </Container>
                    <Container
                        width={"auto"} p={0}
                        display={{base: "none", sm: "block"}}
                    >
                        <AsideBtns/>
                    </Container>
                    <Container
                        p={0} m={0}
                        display={{base: "block", sm: "none"}}
                        width="10" height="10" asChild
                    >
                        <Collapsible.Trigger>
                            <Button
                                width="10" height="10"
                                colorPalette={"blue"} variant={"surface"}
                            >
                                {/*@ts-ignore*/}
                                <FiMenu width="10" height="10"/>
                            </Button>
                        </Collapsible.Trigger>
                    </Container>
                </Flex>
                <Collapsible.Content display={{base: "block", sm: "none"}}>
                    <Navigation/>
                </Collapsible.Content>
            </Collapsible.Root>
            <Separator/>
        </header>
    </Center>
}