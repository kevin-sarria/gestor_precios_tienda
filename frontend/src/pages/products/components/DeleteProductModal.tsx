import { 
    Button,
    Flex,
    Text
} from "@chakra-ui/react"

interface Props {
    closeModal?: () => void;
}

export const DeleteProductModalForm = ({ closeModal }: Props) => {

return (
<>
    
    <Flex
        w='100%'
        flexDirection='column'
        gap={5}
    >
        <Text>Esta seguro de que desea eliminar el producto "{'{'}producto{'}'}"</Text>
        <Flex
            w='100%'
            gap={4}
        >
            <Button
                colorScheme='yellow'
                color='white'
                w='100%'
                onClick={closeModal ? closeModal : () => {}}
            >
                Cancelar
            </Button>

            <Button
                colorScheme='red'
                w='100%'
            >
                Si, Borrar
            </Button>
        </Flex>
    </Flex>
</>
)
}
