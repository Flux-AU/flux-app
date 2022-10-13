import { useRadio, Box, Flex } from '@chakra-ui/react'

// 1. Create a component that consumes the `useRadio` hook

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)
  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Flex
        {...checkbox}
        // w={["200px", "300px"]}
        {...props}
        // h={3}
        direction="row"
        align="center"
        justify="center"
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        textAlign='center'
        bg='brand.midGrey'
        borderColor="brand.darkGrey"
        _hover={{
          borderColor: 'brand.primary',
        }}
        _checked={{
          borderWidth:'2px',
          borderColor: 'black',
          fontWeight: 'bold',
        }}
        transition="box-shadow 200ms ease 0s"
        px={5}
        py={3}
      >
        {props.children}
      </Flex>
    </Box>

  )

}

export default RadioCard