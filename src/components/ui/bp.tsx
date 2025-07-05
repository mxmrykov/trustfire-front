import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
export const sys = createSystem(defaultConfig, defineConfig({
    theme: {
        breakpoints: {
            sm: "560px",
        },
    },
}))