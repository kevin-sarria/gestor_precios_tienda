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
    NumberInputStepper
} from "@chakra-ui/react";

export const CreatePendingPaymentForm = () => {
  return (
    <FormControl>
            <Box
                my={5}
            >
                <FormLabel htmlFor="name_product">Nombre del Cliente</FormLabel>
                <Input
                    name='name_client'
                    id='name_client'
                    placeholder="Nombre del producto"
                />
            </Box>


            <Box>
                
                { /* Quantity Product */ }
                <Box 
                    my={5}
                >
                    <FormLabel htmlFor="product_quantity">Cantidad</FormLabel>
                    <NumberInput
                        name='product_quantity'
                        id='product_quantity'
                        min={0}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                { /* Quantity Product */ }
                
                { /* Name Product */ }
                <Box
                    my={5}
                >
                    <FormLabel htmlFor="product_name">Producto</FormLabel>
                    <Input
                        name='product_name'
                        id='product_name'
                        placeholder="Escriba el nombre del producto..."
                    />
                </Box>
                { /* Name Product */ }

            </Box>
            

            <Box
                w='100%'
            >
                <Button
                    colorScheme='green'
                    w='100%'
                >
                    Registrar Fiado
                </Button>
            </Box>

        </FormControl>
  )
}