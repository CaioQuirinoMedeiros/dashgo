import {
  Flex,
  Text,
  Box,
  Input,
  Icon,
  IconButton,
  HStack,
  Avatar
} from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' mr='4'>
        dashgo
        <Text as='span' marginLeft='1' color='pink.500'>
          .
        </Text>
      </Text>

      <Flex
        as='label'
        flex={1}
        py='3'
        px='8'
        ml='6'
        maxW={400}
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
        alignItems='center'
      >
        <Input
          color='gray.50'
          variant='unstyled'
          placeholder='Buscar na plataforma'
          px='4'
          mr='4'
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearchLine} fontSize='20' />
      </Flex>

      <Flex align='center' ml='auto'>
        <HStack
          spacing='1'
          mx='8'
          pr='8'
          py='1'
          color={'gray.300'}
          borderRightWidth={1}
          borderColor='gray.700'
        >
          <IconButton
            aria-label='Notificações'
            variant='ghost'
            borderRadius='full'
            icon={<Icon as={RiUserAddLine} fontSize='20' />}
          />
          <IconButton
            aria-label='Notificações'
            variant='ghost'
            borderRadius='full'
            icon={<Icon as={RiNotificationLine} fontSize='20' />}
          />
        </HStack>

        <Flex align='center'>
          <Box mr='4' textAlign='right'>
            <Text>Caio Medeiros</Text>
            <Text color='gray.300' fontSize='small'>
              caio.quirino.medeiros@gmail.com
            </Text>
          </Box>

          <Avatar size='md' name='Caio Medeiros' />
        </Flex>
      </Flex>
    </Flex>
  )
}
