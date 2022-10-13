import React from 'react'
import { Box, Heading, Stack, FormControl, FormLabel, VStack, Flex, useRadioGroup } from '@chakra-ui/react'

import RadioCard from './RadioCard';

function AccountSection() {

  const radioOptions = ['Yes', 'No']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <>
      <Flex direction="column" align="center" justify="center" mb="40px" >
        <Heading as="h2">Hey! I'm Alicja.</Heading>
        <Heading as="h2">Do you already have a Flux account?</Heading>
      </Flex>
      <Stack direction="column" w="100%" alignSelf="center" justifySelf="center" mb={10}>
        <Flex direction="column" align="center">
          <FormControl id="account">
            <FormLabel cursor="pointer" mb="16px" mx="auto">
              <VStack {...group} spacing={[3, 3, 4]}>
                {radioOptions.map((value) => {
                  const radio = getRadioProps({ value })
                  return (
                    <RadioCard key={value} {...radio} w={["200px", "300px"]}>
                      {value}
                    </RadioCard>
                  )
                })}
              </VStack>
            </FormLabel>
          </FormControl>
        </Flex>
      </Stack>
    </>
  )
}

export default AccountSection