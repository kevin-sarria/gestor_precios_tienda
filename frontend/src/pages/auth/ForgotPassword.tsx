import { colors } from "../../helpers"
import { Box, Button, Flex, FormControl, Input, Stack, Text } from "@chakra-ui/react"

import { Link } from "react-router-dom";

export const ForgotPassword = () => {

  return (
    <Flex
      align='center'
      justify='center'
      w='100vw'
      h='100vh'
      backgroundColor={`${colors.loginBackground}`}
    >
      <Box
        w={350}
        h={350}
        backgroundColor='white'
        rounded='lg'
        boxShadow='xl'
      >
        <Box
          w='100%'
          h='85px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          backgroundColor={`${colors.loginTopTitle}`}
          borderTopRadius='lg'
        >
          <Text
            fontSize='2xl'
            fontWeight='bold'
            color='white'
          >
            Recuperar Cuenta
          </Text>
        </Box>
        <FormControl
          padding={10}
        >

          <Stack
            w='90%'
            marginX='auto'
            marginY='20px'
          >
            <Input
              type="email"
              name="email"
              placeholder="Correo"
              id="email"
              paddingX='10px'
              paddingY='8px'
              borderRadius='xl'
              backgroundColor={colors.backgroundInputGray}
            />
          </Stack>

          <Text
            color={colors.greenButton}
            fontWeight='semibold'
            textAlign='right'
            mx='15px'
          >
            <Link to='/'>Ya tienes una cuenta?</Link>
          </Text>

          <Stack
            w='fit-content'
            marginX='auto'
            marginY='30px'
          >
            <Button
              backgroundColor={colors.greenButton}
              _hover={{ backgroundColor: colors.greenButtonHover }}
              padding={2}
              rounded='md'
              color='white'
              fontWeight='semibold'
            >
              Recuperar Cuenta
            </Button>
          </Stack>

        </FormControl>
      </Box>
    </Flex>
  )
}