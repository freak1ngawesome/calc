import React from 'react'
import ProductInput from './components/productInput/ProductInput'
import ProductTable from './components/productTable/ProductTable'

import { Container } from "@chakra-ui/react"

export default function App(){
	return (
		<Container maxW="1200">
			<ProductInput />
			<ProductTable />
		</Container>
	)
}
