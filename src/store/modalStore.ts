import { makeAutoObservable } from "mobx"

interface IStore {
	modalActive: boolean
	modalOpen: () => void
	modalClose: () => void
}
class ModalStore implements IStore {
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