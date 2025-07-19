import { useState } from "react"
import { colors } from "../../helpers"
import { Box, Button, Flex, FormControl, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react"

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Login = () => {

  const [ showPassword, setShowPassword ] = useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

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
        h={400}
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
            Login
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

          <Stack
            w='90%'
            marginX='auto'
            marginY='20px'
          >
            <InputGroup
              alignItems='center'
              size='md'
            >
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Contraseña"
                paddingX='10px'
                paddingY='8px'
                borderRadius='xl'
                width='100%'
                backgroundColor={colors.backgroundInputGray}
              />
              <InputRightElement
                width='50px'
                height='100%'
              >
                <Button
                  size='sm'
                  h='100%'
                  marginY='auto'
                  style={{ backgroundColor: 'transparent' }}
                  onClick={toggleShowPassword}
                >
                  { showPassword ? (<FaRegEyeSlash />) : (<FaRegEye />) }
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>

          <Text
            color={colors.greenButton}
            fontWeight='semibold'
            textAlign='right'
            mx='15px'
          >
            <Link to='/forgot-password'>Has olvidado tu password?</Link>
          </Text>

          <Stack
            w='120px'
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
              Iniciar Sesion
            </Button>
          </Stack>

        </FormControl>
      </Box>
    </Flex>
  )
}
