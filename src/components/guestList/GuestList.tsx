import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
	Heading,
	Box,
} from "@chakra-ui/react"
import GuestRows from './GuestRows/GuestRows'
import EmpryGuestList from '../emptyGuestList/EmptyGuestList'
import ProductStore from '../../store/productStore'

export default observer(function GuestList(){
	return (
		<Box>
			{ProductStore.guestList.length > 0 ?
				<Box>
					<Heading my=".5em">Текущий список участников</Heading>
					<Table textStyle="normal">
					<Thead>
						<Tr>
							<Th>Имя</Th>
						</Tr>
					</Thead>
					<Tbody>
						<GuestRows guestList={ProductStore.guestList}/>
					</Tbody>
				</Table>
				</Box> : <EmpryGuestList/>
			}
		</Box>
	)
})