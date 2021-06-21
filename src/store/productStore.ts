import { makeAutoObservable } from "mobx"
import { ProductList, GuestList, Product, Guest } from '../types/types'

interface IStore {
	productList: ProductList
	guestList: GuestList
	addProduct: (obj: Product) => void
	addGuest: (obj: Guest) => void
	deleteProduct: (id : string) => void
	deleteGuest: (id : string) => void
}

class ProductStore implements IStore{
	productList: ProductList = []
	guestList: GuestList = []

	constructor() {
		makeAutoObservable(this)
	}

	addProduct(obj: Product): void {
		this.productList.push(obj)
	}

	addGuest(obj: Guest): void {
		this.guestList.push(obj)
	}

	deleteProduct(id: string): void {
		this.productList = this.productList.filter(pr => pr.id !== id)
	}

	deleteGuest(id: string): void {
		this.guestList = this.guestList.filter(g => g.id !== id)
	}
}

export default new ProductStore()