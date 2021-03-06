import React, { FormEvent, useState } from 'react'
import { nanoid } from 'nanoid'
import { observer } from 'mobx-react-lite'
import { HStack, Input, Button, FormControl } from "@chakra-ui/react"
import Store from '../../store/productStore'

const style = {
	form: {
		d: "flex",
		gridGap: "1em",
	},
	stack: {
		flex: "1",
	},
}

export default observer( function ProductInput() {
	const [productName, setProductName] = useState("")
	const [productCost, setProductCost] = useState("")
  const handleSubmit = function(e: FormEvent) {
		e.preventDefault()
		Store.addProduct({id: nanoid(), productName, productCost: +productCost, guestIn: new Set()})
		setProductName('')
		setProductCost('')
	}
	return (
		<FormControl as="form" {...style.form} onSubmit={handleSubmit}>
			<HStack {...style.stack}>
				<Input
					placeholder="Название продукта"
          required
					value={productName}
					onChange={(e) => setProductName(e.target.value)}/>
				<Input
					placeholder="Стоимость продукта"
          required
          pattern="^[0-9]*[.,]?[0-9]+$"
					value={productCost}
					onChange={(e) =>setProductCost(e.target.value)}/>
			</HStack>
			<Button
        type="submit"
				>Добавить</Button>
		</FormControl>
	)
})