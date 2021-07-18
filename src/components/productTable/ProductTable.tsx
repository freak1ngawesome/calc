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



export default observer( function ProductTable(){
	const handleButtonClick = () => TabsStore.setTabIndex(2)
	return (
		<Box >
			{ProductStore.productList.length > 0 ?
			<Box>
				<Heading my=".5em">Текущая корзина</Heading>
				<Table textStyle="normal">
					<Thead>
						<Tr>
							<Th>Название</Th>
							<Th isNumeric>Цена</Th>
						</Tr>
					</Thead>
					<Tbody>
						<TableRows productList={ProductStore.productList}/>
					</Tbody>
				</Table>
				<Button mt="1em" onClick={handleButtonClick}>Подвести итог</Button>
			</Box> : <EmptyCart/>}
		</Box>
	)
})