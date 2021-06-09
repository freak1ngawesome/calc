import { makeAutoObservable } from "mobx"
import { ProductList } from '../types/types'
import { Product } from '../types/types'

interface  IStore {
	productList: ProductList
	addProduct: (obj: Product) => void
	deleteProduct: (id : string) => void
}

class Store implements IStore{
	productList: ProductList = []

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