export type Guest = {
	name: string,
	id: string,
}

export type GuestList = Array<Guest>;

export type Product = {
	id: string,
	productName: string,
	productCost: number,
	guestIn: GuestList,
}

export type ProductList = Array<Product>