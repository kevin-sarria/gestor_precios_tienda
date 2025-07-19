import { useNavigate } from "react-router-dom";
import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { PendingPaymentProps } from "../../../interfaces";
import { totalPayment } from "../../../helpers";

interface Props {
    data: PendingPaymentProps[];
}

export const PendingPayment = ({ data }: Props) => {

    const navigate = useNavigate();

    const goToPaymentDetails = (id: number) => {
        navigate(`/pending-payments/${id}`);
    }

  return (
    <Flex
        gap={8}
        justifyContent='center'
        flexWrap='wrap'
    >

        {
            data && data.map( ({ id, nombre_cliente, fecha_de_actualizacion, productos_fiados }, index) => (
                <Card
                    key={index}
                    display='flex'
                    maxW='400px'
                    maxH='400px'
                    overflowY='hidden'
                    flexDirection='column'
                    justifyContent='space-evenly'
                    _hover={{
                        transform: 'scale(1.02)',
                        transition: 'transform 0.2s ease-in-out'
                    }}
                    cursor='pointer'
                    shadow='md'
                    onClick={() => goToPaymentDetails(id)}
                >
                    <CardHeader>
                        <Heading size='md'>{ nombre_cliente }</Heading>
                    </CardHeader>

                    <CardBody
                        maxH='90%'
                        overflowY='auto'
                    >

                        <Heading size='sm' marginBottom={5}>Cuenta Pendiente</Heading>

                        {
                            productos_fiados.map( ({ nombre, precio, presentacion }, index) => (
                                <Stack
                                    key={index}
                                    spacing={4}
                                >
                                    <Box
                                        display='flex'
                                        justifyContent='space-between'
                                    >
                                        <Text
                                            maxW='70%'
                                            marginY='1px'
                                        >
                                            { nombre } { presentacion }
                                        </Text>

                                        <Text>${ precio }</Text>
                                    </Box>

                                </Stack>
                            ) )
                        }

                        <Stack
                            w='100%'
                            marginTop={5}
                        >
                            <Flex
                                w='100%'
                                justifyContent='space-between'
                            >
                                <Text fontWeight='semibold'>Total Deuda:</Text>
                                <Text fontWeight='semibold'>${ totalPayment( productos_fiados ) }</Text>
                            </Flex>
                        </Stack>

                        <CardFooter>
                            <Text fontWeight='semibold'>Ultima Fecha de Actualizacion: {fecha_de_actualizacion}</Text>
                        </CardFooter>

                    </CardBody>
                </Card>
            ) )
        }

    </Flex>
  )
}
