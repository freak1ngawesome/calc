import React from 'react'
import { VStack,Text,Icon } from "@chakra-ui/react"
import { GrGroup } from 'react-icons/gr'

export default function EmptyGuestList(){
	return (
		<VStack mt="2em" >
			<Icon as={GrGroup} w="256px" h="256px"/>
			<Text>Добавьте участников</Text>
		</VStack>
	)
}