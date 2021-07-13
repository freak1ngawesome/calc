import React from 'react'
import { observer } from 'mobx-react-lite'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import ProductPage from './pages/ProductPage'
import GuestPage from './pages/GuestPage'
import ResultPage from './pages/ResultPage'
import GuestAddModal from './components/guestAddModal/GuestAddModal'
import { Container } from "@chakra-ui/react"
import TabsStore from './store/tabsStore'

export default observer( function App(){

	const handleTabsChange = (index: number) => {
    TabsStore.setTabIndex(index)
  }

	return (
		<Container maxW="1200">
			<Tabs isFitted  index={TabsStore.tabIndex} onChange={handleTabsChange}>
				<TabList>
					<Tab>Продукты</Tab>
					<Tab>Участиники</Tab>
					<Tab>Итог</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<ProductPage/>
					</TabPanel>
					<TabPanel>
						<GuestPage/>
					</TabPanel>
					<TabPanel>
						<ResultPage/>
					</TabPanel>
				</TabPanels>
			</Tabs>
			<GuestAddModal/>
		</Container>
	)
})
