import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  textStyles: {
    normal: {
      fontSize: ["18px", "22px", "26px"],
      fontWeight: "400",
      lineHeight: "100%",
      letterSpacing: "1px",
    },
  },
})

export default theme