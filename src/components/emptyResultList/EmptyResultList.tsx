import React from 'react'
import { Heading, Button, VStack } from '@chakra-ui/react'
import TabsStore from '../../store/tabsStore'

export default function EmptyResultList(){
	const handleButtonClick = () => {
		TabsStore.setTabIndex(1)
	}
	return (
		<VStack>
			<Heading>Добавьте людей на вкладке "Участники"</Heading>
			<Button onClick={handleButtonClick}>Перейти</Button>
		</VStack>
	)
}