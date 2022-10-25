import React from 'react'
import { Box, Heading, Stack, FormControl, FormLabel, VStack, Flex, useRadioGroup } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'

import { countState, knowsAgentState } from '../../atoms'
import RadioCard from './RadioCard';
import { dialogue } from '../../dialogue'

function AgencyDetailsSection() {
  const [text] = dialogue.filter(item => item.section === 'Agency Details Section')
  const [agent, setAgent] = useRecoilState(knowsAgentState)

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <>
      <Flex direction="column" align="center" justify="center" mb="40px" >
        <Heading as="h2" textAlign='center' >{text.headings[0]}</Heading>
      </Flex>
      <Stack direction="column" w="100%" alignSelf="center" justifySelf="center" mb={10}>
        <Flex direction="column" align="center">
          <FormControl id="account">
            <FormLabel cursor="pointer" mb="16px" mx="auto">
              <VStack {...group} spacing={[3, 3, 4]}>
                {text.options.map((value) => {
                  const radio = getRadioProps({ value })
                  return (
                    <RadioCard key={value} {...radio} w={["200px", "300px"]} onClick={() => setAgent(value == 'Yes' ? true : false)}>
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

export default AgencyDetailsSection