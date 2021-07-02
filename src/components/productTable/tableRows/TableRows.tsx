import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Tr,
  Td,
	IconButton,
	List,
	ListItem,
	useDisclosure,
} from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import GuestButton from '../../guestButton/guestButton'
import ModalFrame from '../../../UI/ModalFrame'
import { ProductList } from '../../../types/types'
import ProductStore from '../../../store/productStore'


type Props = {
	productList: ProductList,
}

const style = {
	td: {
		d: "flex",
		alignItems: "center",
		gridGap: "1em",
	}
}

export default observer( function TableRows({ productList }: Props){
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			{productList.map(prod => {
				return (
					<>
						<Tr key={prod.id}>
							<Td {...style.td}>
								<IconButton
									aria-label="Delete item from list"
									icon={<DeleteIcon />}
									onClick={() => ProductStore.deleteProduct(prod.id)}
								/>
								<GuestButton
									guestNumber={prod.guestIn.length}
									productID={prod.id}
									onOpen={onOpen}/>
								{prod.productName}
							</Td>
							<Td isNumeric>{prod.productCost}</Td>
						</Tr>
						<ModalFrame title="Добавить соедателей" isOpen={isOpen} onClose={onClose}>
							<List>
								
							</List>
						</ModalFrame>
					</>
				)
			})}
		</>
	)
})