import { makeAutoObservable } from "mobx"
import { ProductList, GuestList, Product, Guest } from '../types/types'

class ProductStore {
	productList: ProductList = []
	guestList: GuestList = []
	currentID: string = ''

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

	updateCurrentID(id: string): void{
		this.currentID = id
	}

	resetCurrentID(): void{
		this.currentID = ''
	}

	toggleGuestID(guestID: string, state: boolean):void {
		if (state) {
			this.getActiveProduct.guestIn.delete(guestID)
		} else {
			this.getActiveProduct.guestIn.add(guestID)
		}
	}

	get getActiveProduct() {
		return this.productList.find(product => product.id === this.currentID)
  }
  
  get getGuestListLength() {
    return this.guestList.length
  }

  get getCurrentGuestInLength() {
    return this.getActiveProduct.guestIn.size
  }
}

export default new ProductStore()