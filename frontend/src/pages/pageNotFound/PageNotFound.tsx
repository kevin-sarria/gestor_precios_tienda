import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { colors } from "../../helpers"

import { BiSolidErrorAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {

  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/', {
      replace: true
    });
  }

  return (
    <Flex
      w='100vw'
      h='100vh'
      justifyContent='center'
      alignItems='center'
      backgroundColor={colors.loginBackground}
    >
      <Box
        rounded='md'
        backgroundColor='white'
        shadow='xl'
        padding={10}
        height='fit-conntent'
        maxWidth='600px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap='20px'
      >

        <Text
          color={colors.darkRedText}
          fontWeight='bold'
          fontSize={30}
          textAlign='center'
        >
          <BiSolidErrorAlt
            color="red"
            fontSize='150px'
          />
          Ooops!
        </Text>

        <Text
          color={colors.darkGrayText}
          fontWeight='semibold'
          fontSize={20}
          textAlign='center'
        >
          Parece que la pagina que intenta visitar no esta disponible en estos momentos
        </Text>

        <Button
          border={`2px solid ${colors.blueButton}`}
          _hover={{ backgroundColor: `${colors.blueButton}`, color: 'white' }}
          rounded='md'
          padding='10px'
          fontWeight='semibold'
          color={colors.darkBlueText}
          onClick={returnHome}
        >
          Volver al inicio
        </Button>
      </Box>
    </Flex>
  )
}
