import React from "react";
import {Alert} from "@chakra-ui/react";

export default function DevWarn(): React.JSX.Element {
    return <article>
        <Alert.Root status="info">
            <Alert.Indicator />
            <Alert.Title>
                Сайт находится в разработке.
                С текущим ассортиментом вы можете ознакомится на маркетплейсах.
            </Alert.Title>
        </Alert.Root>
    </article>
}