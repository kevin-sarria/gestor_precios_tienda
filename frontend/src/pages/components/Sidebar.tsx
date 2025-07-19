import { useRef } from "react"
import { NavLink } from "react-router-dom"
import { routesAdmin } from "../../router"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useDisclosure } from "@chakra-ui/react"
import { IoMenu } from "react-icons/io5";
import { colors } from "../../helpers";

export const Sidebar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <>

      <Button
        ref={btnRef}
        sx={{
          backgroundColor: colors.blueButton,
          color: 'white',
          "_hover": {
            backgroundColor: colors.blueButtonHover
          }
        }}
        onClick={onOpen}
      >
        <IoMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody
          >
            <Flex
              gap='10px'
              flexDirection='column'
              padding='10px'
            >
              {
                routesAdmin.map( ({ name, path, visible = true }, index) => 
                  (visible === false) ? 
                  (<span key={index}></span>) : 
                  (<NavLink key={index} to={path} onClick={onClose}>{name}</NavLink>) )
              }
            </Flex>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}
