export type Guest = {
	name: string,
}

export type GuestList = Array<Guest>;

export type Product = {
	id: string,
	productName: string,
	productCost: number,
}

export type ProductList = Array<Product>