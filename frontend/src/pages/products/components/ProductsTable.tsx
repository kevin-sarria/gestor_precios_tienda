import { colors } from "../../../helpers"

import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { LuPencilLine } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { UseModal } from "../../../hooks";

interface Props {
  optionsActions: {
    editProductModal?: () => void;
    deleteProductModal?: () => void;
  }
}

export const ProductsTable = ({ optionsActions }: Props) => {

  const { editProductModal, deleteProductModal } = optionsActions;

  return (
    <TableContainer
        marginTop={10}
        padding='10px'
        shadow='xl'
    >
      <Table variant='striped' colorScheme="blue">
        <Thead>
          <Tr
            backgroundColor={colors.darkBlueText}
          >
            <Th textAlign='center' color='white'>#</Th>
            <Th textAlign='center' color='white'>Nombre</Th>
            <Th textAlign='center' color='white'>Presentacion</Th>
            <Th textAlign='center' color='white'>Categoria</Th>
            <Th textAlign='center' color='white'>Precio</Th>
            <Th textAlign='center' color='white'>Opciones</Th>
          </Tr>
        </Thead>
        <Tbody>

          <Tr>
            <Td textAlign='center'>1</Td>
            <Td textAlign='center'>Salchichas Rancheras</Td>
            <Td textAlign='center'>X5 Unidades</Td>
            <Td textAlign='center'>Embutidos</Td>
            <Td textAlign='center'>5200</Td>
            <Td textAlign='center'>
                <Button mr={2} colorScheme="yellow" onClick={editProductModal ? editProductModal : () => {}}>
                  <LuPencilLine color='white' />
                </Button>

                <Button colorScheme="red" onClick={deleteProductModal ? deleteProductModal : () => {}}>
                  <FaRegTrashCan color='white' />
                </Button>
            </Td>
          </Tr>

          <Tr>
            <Td textAlign='center'>2</Td>
            <Td textAlign='center'>Salchichas Rancheras</Td>
            <Td textAlign='center'>X5 Unidades</Td>
            <Td textAlign='center'>Embutidos</Td>
            <Td textAlign='center'>5200</Td>
            <Td textAlign='center'>
                <Button mr={2} colorScheme="yellow">
                  <LuPencilLine color='white' />
                </Button>

                <Button colorScheme="red">
                  <FaRegTrashCan color='white' />
                </Button>
            </Td>
          </Tr>

          <Tr>
            <Td textAlign='center'>3</Td>
            <Td textAlign='center'>Salchichas Rancheras</Td>
            <Td textAlign='center'>X5 Unidades</Td>
            <Td textAlign='center'>Embutidos</Td>
            <Td textAlign='center'>5200</Td>
            <Td textAlign='center'>
                <Button mr={2} colorScheme="yellow">
                  <LuPencilLine color='white' />
                </Button>

                <Button colorScheme="red">
                  <FaRegTrashCan color='white' />
                </Button>
            </Td>
          </Tr>


        </Tbody>
      </Table>
    </TableContainer>
  )
}
