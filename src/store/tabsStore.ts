import { makeAutoObservable } from "mobx"

class TabsStore {
	tabIndex: number = 0
	constructor() {
		makeAutoObservable(this)
	}

	setTabIndex(index: number) {
		this.tabIndex = index
	}

}

export default new TabsStore()