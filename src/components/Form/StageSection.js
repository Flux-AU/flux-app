import React from 'react'
import { Box, Heading, Stack, FormControl, FormLabel, VStack, Flex, useRadioGroup } from '@chakra-ui/react'

import RadioCard from './RadioCard';
import { dialogue } from '../../dialogue'

function AccountSection() {
  const [text] = dialogue.filter(item => item.section === 'Stage Section')

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <>
      <Flex justify="center" mb="40px">
        <Heading as="h2" textAlign='center'>{text.headings[0]}</Heading>
      </Flex>
      <Stack direction="column" spacing={{ sm: "20px", lg: "35px" }} w="100%" alignSelf="center" justifySelf="center" mb={10}>
        <Flex direction="column" align="center">
          <FormControl id="stage">
            <FormLabel cursor="pointer" mb="16px" mx="auto" >
              <VStack {...group} spacing={[3, 3, 4]}>
                {text.options.map((value) => {
                  const radio = getRadioProps({ value })
                  return (
                    <RadioCard key={value} {...radio} w={['250px', '400px']}>
                      <Flex direction="row" justify="center" align="center" wrap="wrap">
                        {/* <Icon
                          as={BsCircleFill}
                          color="white"
                          mr="10px"
                        /> */}
                        {value}
                      </Flex>
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