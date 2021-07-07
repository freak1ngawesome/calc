import { makeAutoObservable } from "mobx"
import { ProductList, GuestList, Product, Guest } from '../types/types'

interface IStore {
	productList: ProductList
	guestList: GuestList
	addProduct: (obj: Product) => void
	addGuest: (obj: Guest) => void
	deleteProduct: (id : string) => void
	deleteGuest: (id : string) => void
	addGuestID: (productID: string, guestID: string, state: boolean) => void
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

	addGuestID(productID: string, guestID: string, state: boolean):void {
		if (state) {
			this.productList.find(product => product.id === productID).guestIn.delete(guestID)
		} else {
			this.productList.find(product => product.id === productID).guestIn.add(guestID)
		}

	}
}

export default new ProductStore()