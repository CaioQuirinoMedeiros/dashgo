import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile(props: ProfileProps) {
  const { showProfileData } = props

  return (
    <Flex align='center'>
      {!!showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Caio Medeiros</Text>
          <Text color='gray.300' fontSize='small'>
            caio.quirino.medeiros@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Caio Medeiros' />
    </Flex>
  )
}
