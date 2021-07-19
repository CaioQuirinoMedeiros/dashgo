import { Box, Stack, Text } from '@chakra-ui/react'

interface NavSectionProps {
  title: string
  children?: React.ReactNode
}

export function NavSection(props: NavSectionProps) {
  const { title, children } = props

  return (
    <Box>
      <Text fontWeight='bold' color='gray.400' fontSize='small'>
        {title}
      </Text>
      <Stack spacing='4' mt='4' align='stretch'>
        {children}
      </Stack>
    </Box>
  )
}
