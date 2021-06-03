import React from 'react'
import { HStack, Input, Button, FormControl } from "@chakra-ui/react"

const style = {
	form: {
		d: "flex",
		gridGap: "1em",
	},
	stack: {
		flex: "1",
	},
	input: {
		variant: "filled",
	},
	button: {
		variant: "outline",
	}
}

export default function ProductInput() {
	const [productName, setProductName] = React.useState("")
	const [productCost, setProductCost] = React.useState("")
	return (
		<FormControl {...style.form} >
			<HStack {...style.stack}>
				<Input placeholder="Название продукта" {...style.input} value={productName} onChange={(e) => setProductName(e.target.value)}/>
				<Input placeholder="Стоимость продукта" {...style.input} value={productCost} onChange={(e) => setProductCost(e.target.value)}/>
			</HStack>
			<Button {...style.button}>Добавить</Button>
		</FormControl>
	)
}