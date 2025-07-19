import { Button } from '@chakra-ui/react'
import { GoPlus } from "react-icons/go"

interface Props {
  clickAction?: () => void;
}

export const AddRecord = ({ clickAction }: Props) => {
  return (
    <Button
      w='65px'
      h='65px'
      display='flex'
      position='absolute'
      bottom={5}
      right={5}
      rounded='full'
      padding={3}
      justifyContent='center'
      alignItems='center'
      onClick={clickAction}
      colorScheme='green'
    >
        <GoPlus
          fontSize={35}
          color='white'
        />
    </Button>
  )
}
