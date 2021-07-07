import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import ProductPage from './pages/ProductPage'
import GuestPage from './pages/GuestPage'
import GuestAddModal from './components/guestAddModal/GuestAddModal'
import { Container } from "@chakra-ui/react"

export default function App(){
	return (
		<Container maxW="1200">
			<Tabs isFitted variant="enclosed">
				<TabList>
					<Tab>Продукты</Tab>
					<Tab>Участиники</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<ProductPage/>
					</TabPanel>
					<TabPanel>
						<GuestPage/>
					</TabPanel>
				</TabPanels>
			</Tabs>
			<GuestAddModal/>
		</Container>
	)
}
