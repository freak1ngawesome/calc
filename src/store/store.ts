import { makeAutoObservable } from "mobx"
import { ProductList, GuestList, Product } from '../types/types'

interface  IStore {
	productList: ProductList
	guestList: GuestList
	addProduct: (obj: Product) => void
	deleteProduct: (id : string) => void
}

class Store implements IStore{
	productList: ProductList = []
	guestList: GuestList = []

	constructor() {
		makeAutoObservable(this)
	}

	addProduct(obj: Product): void {
		this.productList.push(obj)
	}

	deleteProduct(id: string): void {
		this.productList = this.productList.filter(pr => pr.id !== id)
	}
}

export default new Store()