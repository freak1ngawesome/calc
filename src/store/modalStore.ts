import { makeAutoObservable } from "mobx"

interface IStore {
	modalActive: boolean
	currentGuestIn: Array<string>
	modalOpen: () => void
	modalClose: () => void
	updateGuestIn: (guestIn: Array<string>) => void
	defaultGuestIn: () => void
}
class ModalStore implements IStore {
	modalActive: boolean = false
	currentGuestIn: Array<string> = []
	constructor() {
		makeAutoObservable(this)
	}

	modalOpen(): void {
		this.modalActive = true
	}

	modalClose(): void {
		this.modalActive = false
	}

	updateGuestIn(guestIn: Array<string>): void{
		this.currentGuestIn = guestIn
	}

	defaultGuestIn(): void{
		this.currentGuestIn = []
	}
}

export default new ModalStore()