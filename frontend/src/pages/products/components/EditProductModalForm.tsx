import { 
        Box,
        Button,
        FormControl,
        FormLabel,
        Input,
        NumberDecrementStepper,
        NumberIncrementStepper,
        NumberInput,
        NumberInputField,
        NumberInputStepper,
        Select 
    } from "@chakra-ui/react"

export const EditProductModalForm = () => {
  return (
    <>
        
        <FormControl>
            <Box
                my={5}
            >
                <FormLabel htmlFor="name_product">Nombre</FormLabel>
                <Input
                    name='name_product'
                    id='name_product'
                    placeholder="Nombre del producto"
                />
            </Box>

            <Box
                my={5}
            >
                <FormLabel htmlFor="presentation_product">Presentacion</FormLabel>
                <Input
                    name='presentation_product'
                    id='presentation_product'
                    placeholder="Presentacion"
                />
            </Box>

            <Box
                my={5}
            >
                <FormLabel htmlFor="category_product">Categoria</FormLabel>
                <Select
                    name='category_product'
                    id='category_product' placeholder="Seleccione una opcion"
                >
                    <option>Embutidos</option>
                    <option>Lacteos</option>
                    <option>Empaquetados</option>
                </Select>
            </Box>

            <Box
                my={5}
            >
                <FormLabel htmlFor="price_product">Precio</FormLabel>
                <NumberInput
                    name='price_product'
                    id='price_product'
                    min={0}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Box>

            <Box
                w='100%'
            >
                <Button
                    colorScheme='green'
                    w='100%'
                >
                    Editar Producto
                </Button>
            </Box>

        </FormControl>
    </>
  )
}
