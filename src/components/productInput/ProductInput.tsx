import React from 'react'
import { nanoid } from 'nanoid'
// import { useForm } from "react-hook-form"
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
  console.log(1);

	const [productName, setProductName] = React.useState("")
	const [productCost, setProductCost] = React.useState("")
  // const { register, handleSubmit } = useForm()
  const handleAdd = () => Store.addProduct({id: nanoid(), productName, productCost: +productCost})
	return (
		<FormControl as="form" {...style.form} onSubmit={handleAdd}>
			<HStack {...style.stack}>
				<Input
					placeholder="Название продукта"
          required
					{...style.input}
					value={productName}
					onChange={(e) => setProductName(e.target.value)}/>
				<Input
					placeholder="Стоимость продукта"
          required
					{...style.input}
					value={productCost}
					onChange={(e) =>setProductCost(e.target.value)}/>
			</HStack>
			<Button
        type="submit"
				{...style.button}
				>Добавить</Button>
		</FormControl>
	)
})