import {
  Box,
  Flex,
  Heading,
  Checkbox,
  Button,
  Icon,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue
} from '@chakra-ui/react'
import {
  RiAddLine,
  RiEraserFill,
  RiMore2Fill,
  RiPencilFill
} from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'

export default function UsersList() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true })

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <Box as='main' flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
            </Heading>

            <Button
              as='a'
              size='sm'
              href='#'
              fontSize='sm'
              colorScheme='pink'
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['2', '4', '6']} color='gray.300'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th px={['2', '4', '6']}>Usuário</Th>
                {!!isWideVersion && <Th>Data de cadastro</Th>}
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['2', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td px={['2', '4', '6']}>
                  <Box>
                    <Text fontWeight='bold'>Diego Fernandes</Text>
                    <Text fontSize='sm' color='gray.300'>
                      diego.shell.f@gmail.com
                    </Text>
                  </Box>
                </Td>
                {!!isWideVersion && <Td>04 de Abril, 2021</Td>}
                <Td textAlign='right' px='2'>
                  <Menu autoSelect={false}>
                    <MenuButton
                      as={IconButton}
                      borderRadius='full'
                      variant='ghost'
                      aria-label='opções'
                      icon={<Icon as={RiMore2Fill} color={'gray.300'} />}
                    />
                    <MenuList bg='gray.900' borderColor='gray.500'>
                      <MenuItem
                        _hover={{ bg: 'gray.700' }}
                        _selected={{ bg: 'gray.700' }}
                        icon={<Icon as={RiPencilFill} />}
                      >
                        Editar
                      </MenuItem>
                      <MenuItem
                        _hover={{ bg: 'gray.700' }}
                        _selected={{ bg: 'gray.700' }}
                        icon={<Icon as={RiEraserFill} />}
                      >
                        Remover
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
