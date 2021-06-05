import { makeAutoObservable } from "mobx"
import { ProductList } from '../types/types'
import { Product } from '../types/types'

interface  IStore {
	productList: ProductList;
	addProduct: (obj: Product) => void;
}

class Store implements IStore{
	productList: ProductList = []

	constructor() {
		makeAutoObservable(this)
	}

	addProduct(obj: Product): void {
		this.productList.push(obj)
	}
}

export default new Store()