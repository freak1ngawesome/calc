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
	components: {
		Button: {
			defaultProps: {
				variant: "outline",
				size: "lg",
			},
			sizes: {
				xl: {
          h: "56px",
          fontSize: "xl",
          px: "32px",
        },
			}
		},
		Input: {
			defaultProps: {
				variant: "filled",
				size: "lg",
			}
		},
		Heading: {
			defaultProps: {
				size: "xl",
			}
		},
		Tabs: {
			defaultProps: {
				variant: "enclosed",
				size: "md",
			}
		},
		Text: {
			baseStyle: {
				fontSize: "24px"
			}
		}
	}
})

export default theme