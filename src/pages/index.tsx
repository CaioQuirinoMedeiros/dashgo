import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/Form/Input'

interface SignInFormData {
  email: string
  password: string
}

const signInFormSchema = yup.object({
  email: yup.string().required('Preencha seu e-mail').email('Este não é um e-mail válido'),
  password: yup.string().required('Preencha sua senha')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })
  const errors = formState.errors

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    console.log({ data })
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })
  }

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        w='100%'
        maxW={360}
        bg='gray.800'
        p={8}
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name='email'
            label='E-mail'
            type='email'
            error={formState.errors['email']}
            {...register('email')}
          />
          <Input
            name='password'
            label='Senha'
            type='password'
            error={formState.errors['password']}
            {...register('password')}
          />
        </Stack>

        <Button
          type='submit'
          marginTop={6}
          colorScheme='pink'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
