import React from "react";
import {Alert, Text} from "@chakra-ui/react";

export default function DevWarn(): React.JSX.Element {
    return <article>
        <Alert.Root status="info">
            <Alert.Indicator/>
            <Alert.Title>
                <Text fontWeight="semibold">
                    Сайт находится в разработке. <br/>
                    С текущим ассортиментом вы можете ознакомится на маркетплейсах.
                </Text>
            </Alert.Title>
        </Alert.Root>
    </article>
}