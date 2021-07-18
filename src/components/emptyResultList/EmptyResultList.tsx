import React from 'react'
import { Heading, Button, VStack } from '@chakra-ui/react'
import TabsStore from '../../store/tabsStore'

export default function EmptyResultList(){
	const handleButtonClick = () => {
		TabsStore.setTabIndex(1)
	}
	return (
		<VStack mt="2em">
			<Heading mt="1em">Добавьте людей на вкладке "Участники"</Heading>
			<Button mt="2em" onClick={handleButtonClick} size="xl">Перейти</Button>
		</VStack>
	)
}