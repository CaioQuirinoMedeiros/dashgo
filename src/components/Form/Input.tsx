import * as React from 'react'
import { FieldError } from 'react-hook-form'
import {
  Input as ChakraInput,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { name, label, id = name, error, ...rest } = props

    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={id}>{label}</FormLabel>}

        <ChakraInput
          focusBorderColor='pink.500'
          bgColor='gray.900'
          variant='filled'
          _hover={{ bg: 'gray.900' }}
          size='lg'
          id={id}
          {...rest}
          ref={ref}
          name={name}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    )
  }
)
