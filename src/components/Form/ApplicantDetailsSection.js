import React from 'react'
import { Grid, Center, Box, Heading, Stack, FormControl, FormLabel, VStack, HStack, Flex, useColorModeValue, Input, GridItem, Select, Icon } from '@chakra-ui/react'
import { HiOutlineMail, HiOutlineDeviceMobile } from 'react-icons/hi'

import { dialogue } from '../../dialogue'

function ApplicantDetailsSection() {
  const [text] = dialogue.filter(item => item.section === 'Applicant Details Section')
  const textColor = useColorModeValue("black", "gray.700");

  return (
    <Box>
      <Center mb="40px">
        <Heading as="h2" w="30ch" textAlign="center">{text.headings[0]}</Heading>
      </Center>

      {/* VStack spacing={[3, 3, 4]} */}
      <Grid 
        templateAreas={`"name"
                        "demographic"
                        "contact"`
                        }
        gridTemplateRows="repeat(3, 1fr)" 
        gridTemplateColumns="1fr 1fr" 
        alignItems="center"
        justifyItems="center"
        gap={['1','4']}
        w="auto"
        mx="auto">
        <GridItem justifySelf="end">
          <FormControl>
              <FormLabel
                color="black"
                zIndex="4"
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                // position="absolute"
                // top="1px"
                // left={3}
              >
                {text.labels[0]}
              </FormLabel>
              <Input
                focusBorderColor="brand.primary"
                bg="white"
                w={["200px"]}
                // pt={6}
                py={4}
                px={3}
                borderRadius="md"
                fontSize="sm"
                color={textColor}
              />
          </FormControl>
        </GridItem>
        <GridItem justifySelf="start">
          <FormControl>
            <FormLabel
              color="black"
              zIndex="4"
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              // position="absolute"
              // top="1px"
              // left={3}
            >
              {text.labels[1]}
            </FormLabel>
            <Input
              focusBorderColor="brand.primary"
              bg="white"
              w={["200px"]}
              // pt={6}
              py={4}
              px={3}
              borderRadius="md"
              fontSize="sm"
              color={textColor}
            />
          </FormControl>
        </GridItem>
        <GridItem justifySelf="end">
          <FormControl>
              <FormLabel
                color="black"
                zIndex="4"
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                position="absolute"
                top={2.5}
                left={3}
              >
                <Icon as={HiOutlineMail} w={5} h={5} />
              </FormLabel>
              <Input
                focusBorderColor="brand.primary"
                bg="white"
                w={["200px"]}
                py={5}
                px={3}
                pl={10}
                borderRadius="md"
                fontSize="xs"
                placeholder={text.placeholders[0]}
                textTransform="uppercase"
                color={textColor}
              />
          </FormControl>
        </GridItem>
        <GridItem justifySelf="start">
          <FormControl>
            <FormLabel
              color="black"
              zIndex="4"
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              position="absolute"
              top={2.5}
              left={3}
            >
              <Icon as={HiOutlineDeviceMobile} w={5} h={5} />
            </FormLabel>
            <Input
              focusBorderColor="brand.primary"
              bg="white"
              w={["200px"]}
              py={5}
              px={3}
              pl={10}
              borderRadius="md"
              fontSize="xs"
              color={textColor}
              textTransform="uppercase"
              placeholder={text.placeholders[1]}
            />
          </FormControl>
        </GridItem>
        {/* <GridItem justifySelf="end">
          <FormControl>
              <FormLabel
                color="black"
                zIndex="4"
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                m={0}
                position="absolute"
                top={0}
                left={3}
              >
                Gender
              </FormLabel>
              <Select 
                placeholder='Select an option'
                focusBorderColor="brand.primary"
                bg="white"
                w={["200px"]}
                borderRadius="md"
                fontSize="xs"
                color={textColor}
              >
                {genderOptions.map(value => (
                  <option value={value}>{value}</option> 
                ))}
              </Select>
          </FormControl>
        </GridItem> */}
      </Grid>
    </Box>
  )
}

export default ApplicantDetailsSection