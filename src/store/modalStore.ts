import { makeAutoObservable } from "mobx"

interface IStore {
	modalActive: boolean
	currentID: string
	modalOpen: () => void
	modalClose: () => void
	updateCurrentID: (id: string) => void
	resetCurrentID: () => void
}
class ModalStore implements IStore {
	modalActive: boolean = false
	currentID: string = ''
	constructor() {
		makeAutoObservable(this)
	}

	modalOpen(): void {
		this.modalActive = true
	}

	modalClose(): void {
		this.modalActive = false
	}

	updateCurrentID(id: string): void{
		this.currentID = id
	}

	resetCurrentID(): void{
		this.currentID = ''
	}
}

export default new ModalStore()