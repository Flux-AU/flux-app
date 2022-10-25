import React from 'react'
import { Grid, Center, Box, Heading, Stack, FormControl, FormLabel, VStack, HStack, Flex, useColorModeValue, Input, GridItem, Select, Icon } from '@chakra-ui/react'
import { HiOutlineMail, HiOutlineDeviceMobile } from 'react-icons/hi'

import { dialogue } from '../../dialogue'

function AgencyKnownSection() {
  const [text] = dialogue.filter(item => item.section === 'Agency Known Section')
  const textColor = useColorModeValue("black", "gray.700");

  return (
    <Box>
      <Center mb="40px">
        <Heading as="h2" w="30ch" textAlign="center">{text.headings[0]}</Heading>
      </Center>
      <VStack spacing={8}>
        <Box>
          <FormControl>
              <FormLabel
                color="black"
                zIndex="4"
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
              >
                {text.labels[0]}
              </FormLabel>
              <Input
                focusBorderColor="brand.primary"
                bg="white"
                w="40vw"
                maxWidth={["400px"]}
                py={4}
                px={3}
                borderRadius="md"
                fontSize="md"
                color={textColor}
              />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel
              color="black"
              zIndex="4"
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
            >
              {text.labels[1]}
            </FormLabel>
            <Input
              focusBorderColor="brand.primary"
              bg="white"
              w="40vw"
              maxWidth={["400px"]}
              py={4}
              px={3}
              borderRadius="md"
              fontSize="md"
              color={textColor}
            />
          </FormControl>
        </Box>
      </VStack>
      
    </Box>
  )
}

export default AgencyKnownSection