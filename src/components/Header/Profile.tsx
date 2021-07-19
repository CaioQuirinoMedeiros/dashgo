import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Caio Medeiros</Text>
        <Text color='gray.300' fontSize='small'>
          caio.quirino.medeiros@gmail.com
        </Text>
      </Box>

      <Avatar size='md' name='Caio Medeiros' />
    </Flex>
  )
}
