import React from 'react'
import { observer } from 'mobx-react-lite'
import {
	Box,
	Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
	Button,
} from "@chakra-ui/react"
import ProductStore from '../../store/productStore'
import TabsStore from '../../store/tabsStore'
import TableRows from './tableRows/TableRows'
import EmptyCart from '../emptyCart/EmptyCart'
const style = {
	heading: {
		size: "lg",
	},
	text: {
		fontSize: "2xl",
	}
}


export default observer( function ProductTable(){
	const handleButtonClick = () => TabsStore.setTabIndex(2)
	return (
		<Box textStyle="normal">
			<Heading {...style.heading} >Текущая корзина</Heading>
			{ProductStore.productList.length > 0 ?
			<Box>
				<Table>
					<Thead>
						<Tr>
							<Th>Название</Th>
							<Th isNumeric>Цена</Th>
						</Tr>
					</Thead>
					<Tbody>
						<TableRows productList={ProductStore.productList}/>
					</Tbody>
					<Button onClick={handleButtonClick}>Подвести итог</Button>
				</Table>
			</Box> : <EmptyCart/>}
		</Box>
	)
})