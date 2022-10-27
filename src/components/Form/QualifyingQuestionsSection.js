import React from 'react'
import { Grid, Center, Box, Heading, Stack, FormControl, FormLabel, VStack, HStack, Flex, useColorModeValue, Input, GridItem, Select, Icon } from '@chakra-ui/react'
import { HiOutlineMail, HiOutlineDeviceMobile } from 'react-icons/hi'

import { dialogue } from '../../dialogue'

function QualifyingQuestionsSection() {
  const [text] = dialogue.filter(item => item.section === 'Qualifying Questions Section')
  const textColor = useColorModeValue("black", "gray.700");

  const firstName = "{FirstName}"

  return (
    <Box>
      <Center mb="40px">
        <Heading as="h2" w="30ch" textAlign="center">{text.headings[0]}{firstName}{text.headings[1]}</Heading>
      </Center>
      <HStack spacing={8} align="center" justify="center">
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
      </HStack>
      
    </Box>
  )
}

export default QualifyingQuestionsSection