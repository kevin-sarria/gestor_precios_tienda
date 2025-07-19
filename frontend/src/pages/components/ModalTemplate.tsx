import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  title: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ModalTemplate = ({ children, isOpen, onClose, title = '' }: Props) => {
  return (
    <>
      <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent
              padding={3}
            >
                <ModalHeader>{title ? title : ''}</ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                    { children }
                </ModalBody>

            </ModalContent>
        </Modal>
    </>
  )
}