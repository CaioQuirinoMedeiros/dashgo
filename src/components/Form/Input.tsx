import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

export function Input(props: InputProps) {
  const { name, label, id = name, ...rest } = props

  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={id}>E-mail</FormLabel>}

      <ChakraInput
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{ bg: 'gray.900' }}
        size='lg'
        id={id}
        {...rest}
        name={name}
      />
    </FormControl>
  )
}
