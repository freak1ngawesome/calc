export type Guest = {
	name: string,
	id: string,
}

export type GuestList = Array<Guest>

export type Product = {
	id: string,
	productName: string,
	productCost: number,
	guestIn: Array<string>,
}

export type ProductList = Array<Product>