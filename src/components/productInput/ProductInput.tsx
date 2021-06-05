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
		errorBorderColor: "red.500"
	},
	button: {
		variant: "outline",
	}
}

export default observer( function ProductInput() {
	const validation = new RegExp("^[0-9]*[.,]?[0-9]+$","i")
	const [productName, setProductName] = React.useState("")
	const [productCost, setProductCost] = React.useState("")
	const [valid, setValid] = React.useState(true)
	const handleValidation = (str: string) => setValid(validation.test(str))

	return (
		<FormControl {...style.form} >
			<HStack {...style.stack}>
				<Input
					placeholder="Название продукта"
					{...style.input}
					value={productName}
					onChange={(e) => setProductName(e.target.value)}/>
				<Input
					isInvalid={!valid}
					placeholder="Стоимость продукта"
					{...style.input}
					value={productCost}
					onChange={(e) => {
						const val = e.target.value
						setProductCost(val)
						handleValidation(val)}
					}/>
			</HStack>
			<Button
				isDisabled={!valid}
				{...style.button}
				onClick={() => Store.addProduct({id: nanoid(), productName, productCost: +productCost})}>Добавить</Button>
		</FormControl>
	)
})