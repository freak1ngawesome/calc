import React from 'react'
import { nanoid } from 'nanoid'
import { observer } from 'mobx-react'
import { HStack, Input, Button, FormControl } from "@chakra-ui/react"
import Store from '../../store/store'
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

export default observer( function ProductInput() {
	const [productName, setProductName] = React.useState("")
	const [productCost, setProductCost] = React.useState("")

	return (
		<FormControl {...style.form} >
			<HStack {...style.stack}>
				<Input placeholder="Название продукта" {...style.input} value={productName} onChange={(e) => setProductName(e.target.value)}/>
				<Input placeholder="Стоимость продукта" {...style.input} value={productCost} onChange={(e) => setProductCost(e.target.value)}/>
			</HStack>
			<Button {...style.button} onClick={() => Store.addProduct({id: nanoid(), productName, productCost: +productCost})}>Добавить</Button>
		</FormControl>
	)
})