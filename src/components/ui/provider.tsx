"use client"

import { ChakraProvider } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

import { sys } from "./bp"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={sys}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
