import React from 'react'
import { VStack,Text,Icon } from "@chakra-ui/react"
import { GiShoppingCart } from 'react-icons/gi'

const style = {
	box: {
		w: "100%",
		justify: "center",
		align: "center",
	}
}

export default function EmptyCart(){
	return (
		<VStack {...style.box}>
			<Icon as={GiShoppingCart} w="256px" h="256px"/>
			<Text>Корзина пуста</Text>
		</VStack>
	)
}