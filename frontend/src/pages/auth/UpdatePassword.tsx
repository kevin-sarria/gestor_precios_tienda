import { useState } from "react"
import { colors } from "../../helpers"
import { Box, Button, Flex, FormControl, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react"

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const UpdatePassword = () => {

  const [ showPassword, setShowPassword ] = useState<boolean>(false);
  const [ showRepeatPassword, setShowRepeatPassword ] = useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowRepeatPassword = () => setShowRepeatPassword(!showRepeatPassword);

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
            Cambiar Contraseña
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
                type={showRepeatPassword ? "text" : "password"}
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Repita la contraseña"
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
                  onClick={toggleShowRepeatPassword}
                >
                  { showRepeatPassword ? (<FaRegEyeSlash />) : (<FaRegEye />) }
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
            <Link to='/'>Ir al inicio</Link>
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
              Cambiar Contraseña
            </Button>
          </Stack>

        </FormControl>
      </Box>
    </Flex>
  )
}
