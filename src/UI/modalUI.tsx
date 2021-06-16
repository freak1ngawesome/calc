import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
	Button,
	useDisclosure
} from "@chakra-ui/react"

type Props = {
	header: string,
	children: JSX.Element,
}
const { isOpen, onOpen, onClose } = useDisclosure()

function ModalUI({ header, children }: Props){
	return (
		<Modal
		isOpen={isOpen}
		onClose={onClose}
		isCentered
		motionPreset="slideInBottom"
		scrollBehavior="outside">
      <ModalOverlay />
      <ModalContent>
				{header ? <ModalHeader>{header}</ModalHeader>: null}
        <ModalCloseButton />
        <ModalBody>
					{children}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
	)
}

const useModal = () => [onOpen, ModalUI]

export default useModal