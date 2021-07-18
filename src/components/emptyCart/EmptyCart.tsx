import React from 'react'
import { VStack,Text,Icon } from "@chakra-ui/react"
import { GrCart } from 'react-icons/gr'

export default function EmptyCart(){
	return (
		<VStack mt="2em">
			<Icon as={GrCart} w="256px" h="256px"/>
			<Text>Корзина пуста</Text>
		</VStack>
	)
}