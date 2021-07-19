import { Button, Stack, Box } from '@chakra-ui/react'

interface PaginationItemProps {
  isCurrent?: boolean
  number: number
}

export function PaginationItem(props: PaginationItemProps) {
  const { isCurrent = false, number } = props

  return isCurrent ? (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      colorScheme='pink'
      disabled
      _disabled={{ bg: 'pink.500', cursor: 'default' }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      bg='gray.700'
      _hover={{ bg: 'gay.500' }}
    >
      {number}
    </Button>
  )
}
