import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { pendingPaymentData } from "../../../data";
import { useNavigate, useParams } from "react-router-dom";
import { PendingPaymentProps } from "../../../interfaces";
import { totalPayment } from "../../../helpers";
import { AddRecord, ModalTemplate } from "../../components";
import { UseModal } from "../../../hooks";

export const PendingPaymentDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const clientPendingPayment: PendingPaymentProps | undefined = pendingPaymentData.find(obj => obj.id == Number(id));

    if (!clientPendingPayment) {
        return navigate('/404');
    }

    const { nombre_cliente, fecha_de_actualizacion, productos_fiados } = clientPendingPayment;

    const { ContentModal, isOpen, onClose, titleModal, editPendingPaymentsModal } = UseModal();

    return (
        <Flex
            maxW='700px'
            w='100%'
            h='90%'
            mx='auto'
            justifyContent='center'
            my='20px'
        >

            <Box
                w='80%'
            >

                <Heading size='xl' my={5}>{nombre_cliente}</Heading>

                <Heading size='md' my={5}>Cuenta Pendiente</Heading>

                {
                    productos_fiados.map(({ nombre, precio, presentacion }, index) => (
                        <Stack
                            key={index}
                        >
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                my='5px'
                            >
                                <Text
                                    maxW='70%'
                                    marginY='1px'
                                >
                                    {nombre} {presentacion}
                                </Text>

                                <Text>${precio}</Text>
                            </Box>

                        </Stack>
                    ))
                }

                <Stack
                    w='100%'
                    marginTop={5}
                >
                    <Flex
                        w='100%'
                        justifyContent='space-between'
                    >
                        <Text fontSize='xl' fontWeight='bold'>Total Deuda:</Text>
                        <Text fontSize='xl' fontWeight='bold'>${totalPayment(productos_fiados)}</Text>
                    </Flex>
                </Stack>


                <Text mt='20px' fontWeight='bold' textAlign='center'>Ultima Fecha de Actualizacion: {fecha_de_actualizacion}</Text>
            </Box>

            <AddRecord clickAction={editPendingPaymentsModal} />

            <ModalTemplate
                title={titleModal}
                isOpen={isOpen}
                onClose={onClose}
            >
                {ContentModal}
            </ModalTemplate>

        </Flex>
    )
}
