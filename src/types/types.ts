export type User = {
	name: string,
}

export type UserList = Array<User>;

export type Product = {
	id: string,
	productName: string,
	productCost: number,
}

export type ProductList = Array<Product>