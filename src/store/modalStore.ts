import { makeAutoObservable } from "mobx"

interface IStore {
	modalActive: boolean
	modalOpen: () => void
	modalClose: () => void
	updateID: (id: string) => void
	defaultID: () => void
}
class ModalStore implements IStore {
	modalActive: boolean = false
	activeID: string = ''
	constructor() {
		makeAutoObservable(this)
	}

	modalOpen(): void {
		this.modalActive = true
	}

	modalClose(): void {
		this.modalActive = false
	}

	updateID(id: string): void{
		this.activeID = id
	}

	defaultID(): void{
		this.activeID = ''
	}
}

export default new ModalStore()