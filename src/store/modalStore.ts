import { makeAutoObservable } from "mobx"

class ModalStore {
	modalActive: boolean = false
	constructor() {
		makeAutoObservable(this)
	}

	modalOpen(): void {
		this.modalActive = true
	}

	modalClose(): void {
		this.modalActive = false
	}
}

export default new ModalStore()