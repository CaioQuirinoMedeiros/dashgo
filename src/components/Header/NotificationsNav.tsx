import { Icon, IconButton, HStack, Tooltip } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function NotificationsNav() {
  return (
    <HStack
      spacing='1'
      mx={['6', '8']}
      pr={['6', '8']}
      py='1'
      color={'gray.300'}
      borderRightWidth={1}
    >
      <Tooltip label='Adicionar usuário' placement='bottom'>
        <IconButton
          aria-label='Adicionar usuário'
          variant='ghost'
          borderRadius='full'
          icon={<Icon as={RiUserAddLine} fontSize='20' />}
        />
      </Tooltip>
      <Tooltip label='Notificações' placement='bottom'>
        <IconButton
          aria-label='Notificações'
          variant='ghost'
          borderRadius='full'
          icon={<Icon as={RiNotificationLine} fontSize='20' />}
        />
      </Tooltip>
    </HStack>
  )
}
